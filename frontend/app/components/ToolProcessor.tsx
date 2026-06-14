'use client';
import { useState, useEffect } from 'react';

interface ToolProcessorProps {
  tool: string;
  files: File[];
  options: Record<string, string | boolean | number>;
  onSuccess?: (url: string) => void;
  onError?: (msg: string) => void;
  apiPath: string;
  isAsync: boolean;
  onReset: () => void;
}

export default function ToolProcessor({ tool, files, options, onSuccess, onError, apiPath, isAsync, onReset }: ToolProcessorProps) {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'done' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [jobId, setJobId] = useState('');
  const [pdfInfoData, setPdfInfoData] = useState<any>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.thepdfninja.com';

  const startProcess = async () => {
    setStatus('uploading');
    setProgress(10);
    setErrorMsg('');

    try {
      if (files.length === 0 && tool !== 'html-to-pdf') {
        throw new Error('Please select at least one file to process.');
      }

      // 1. Upload files to S3 via presigned URLs
      const fileKeys: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Get presigned URL
        const uploadRes = await fetch(`${apiUrl}/v1/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, content_type: file.type || 'application/pdf' })
        });
        
        if (!uploadRes.ok) throw new Error('Failed to secure upload link from server.');
        const { upload_url, file_key } = await uploadRes.json();

        // Put file to S3
        const putRes = await fetch(upload_url, {
          method: 'PUT',
          headers: { 'Content-Type': file.type || 'application/pdf' },
          body: file
        });

        if (!putRes.ok) throw new Error(`Failed to upload ${file.name}`);
        fileKeys.push(file_key);
        
        // Update progress roughly
        setProgress(10 + Math.floor(((i + 1) / files.length) * 30));
      }

      setStatus('processing');
      setProgress(50);

      // 2. Call the tool API
      const payload = { file_keys: fileKeys, options };
      
      const endpoint = isAsync ? `/v1/jobs/${tool}` : `/v1/tools/${tool}`;
      const res = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.error || 'Failed to start processing.');
      }

      const data = await res.json();

      if (isAsync) {
        setJobId(data.job_id);
        await pollJob(data.job_id);
      } else {
        if (tool === 'pdf-info') {
          setPdfInfoData(data.info);
        } else {
          setDownloadUrl(data.download_url);
        }
        setProgress(100);
        setStatus('done');
        if (onSuccess && data.download_url) onSuccess(data.download_url);
      }

    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message || 'An unexpected error occurred during processing.');
      if (onError) onError(err.message);
    }
  };

  const pollJob = async (id: string) => {
    let attempts = 0;
    while (attempts < 60) { // Max 2 mins polling
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const res = await fetch(`${apiUrl}/v1/jobs/status/${id}`);
      if (!res.ok) throw new Error('Failed to check job status.');
      
      const data = await res.json();
      
      if (data.status === 'complete') {
        setProgress(100);
        setDownloadUrl(data.download_url);
        setStatus('done');
        if (onSuccess) onSuccess(data.download_url);
        return;
      } else if (data.status === 'failed') {
        throw new Error(data.error || 'Server failed to process the PDF.');
      }
      
      // Still processing
      setProgress(p => Math.min(p + 5, 90));
      attempts++;
    }
    
    throw new Error('Processing timed out after 2 minutes.');
  };

  return (
    <div style={{
      background: 'white',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '32px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {status === 'idle' && (
        <div className="anim-fade-up">
          <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text)' }}>
            Ready to process {files.length} file{files.length !== 1 ? 's' : ''}
          </p>
          <button onClick={startProcess} className="btn btn-primary btn-lg" style={{ width: '100%', maxWidth: '300px' }}>
            Process PDF
          </button>
        </div>
      )}

      {(status === 'uploading' || status === 'processing') && (
        <div className="anim-fade-up">
          <div style={{ marginBottom: '24px' }}>
             <svg className="spin" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto', color: 'var(--orange)' }}>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <style>{`
              .spin { animation: spin 1.5s linear infinite; }
            `}</style>
          </div>
          <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '8px' }}>
            {status === 'uploading' ? 'Uploading files...' : 'Processing your PDF...'}
          </p>
          <div style={{ width: '100%', maxWidth: '400px', height: '8px', background: 'var(--bg)', borderRadius: '4px', margin: '0 auto', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              background: 'var(--orange)',
              width: `${progress}%`,
              transition: 'width 0.3s ease'
            }} />
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '12px' }}>This usually takes a few seconds.</p>
        </div>
      )}

      {status === 'done' && (
        <div className="anim-fade-up">
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px' }}>
            ✓
          </div>
          <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '8px' }}>Task Complete!</h3>
          
          {tool === 'pdf-info' && pdfInfoData ? (
            <div style={{ textAlign: 'left', background: 'var(--bg)', padding: '16px', borderRadius: 'var(--radius)', marginBottom: '24px', overflowX: 'auto', fontSize: '0.9rem' }}>
              <pre style={{ margin: 0, color: 'var(--text)' }}>
                {JSON.stringify(pdfInfoData, null, 2)}
              </pre>
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Your file has been successfully processed.</p>
          )}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {tool !== 'pdf-info' && (
              <a href={downloadUrl} download={`processed_${tool}.pdf`} className="btn btn-primary btn-lg">
                Download File
              </a>
            )}
            <button onClick={onReset} className="btn btn-outline btn-lg">
              Process Another
            </button>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="anim-fade-up">
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FEF2F2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', margin: '0 auto 20px', fontWeight: 'bold' }}>
            !
          </div>
          <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '8px' }}>Processing Error</h3>
          <p style={{ color: '#DC2626', background: '#FEF2F2', padding: '12px', borderRadius: 'var(--radius-sm)', marginBottom: '24px', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto 24px' }}>
            {errorMsg}
          </p>
          <button onClick={onReset} className="btn btn-primary">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
