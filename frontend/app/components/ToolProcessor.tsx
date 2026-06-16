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

// Browser often returns empty string for text-based file types.
// This map ensures we always send the correct MIME type to the server.
const MIME_FALLBACKS: Record<string, string> = {
  '.txt':  'text/plain',
  '.csv':  'text/csv',
  '.md':   'text/markdown',
  '.rtf':  'application/rtf',
  '.epub': 'application/epub+zip',
  '.odt':  'application/vnd.oasis.opendocument.text',
  '.html': 'text/html',
  '.htm':  'text/html',
};

function getContentType(file: File): string {
  if (file.type) return file.type;
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return MIME_FALLBACKS[ext] || 'application/octet-stream';
}

export default function ToolProcessor({ tool, files, options, onSuccess, onError, apiPath, isAsync, onReset }: ToolProcessorProps) {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'done' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [jobId, setJobId] = useState('');
  const [pdfInfoData, setPdfInfoData] = useState<any>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.thepdfninja.com';

  // Auto-start processing as soon as this component mounts
  useEffect(() => {
    startProcess();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        const contentType = getContentType(file);
        
        // Get presigned URL
        const uploadRes = await fetch(`${apiUrl}/v1/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, content_type: contentType })
        });
        
        if (!uploadRes.ok) throw new Error('Failed to secure upload link from server.');
        const { upload_url, file_key } = await uploadRes.json();

        // Put file to S3 — Content-Type must match the presigned URL exactly
        const putRes = await fetch(upload_url, {
          method: 'PUT',
          headers: { 'Content-Type': contentType },
          body: file
        });

        if (!putRes.ok) throw new Error(`Failed to upload ${file.name} (HTTP ${putRes.status})`);
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
            Starting…
          </p>
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
            <div style={{ textAlign: 'left', background: 'var(--bg)', border: '1px solid var(--border)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '24px', color: 'var(--text)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>Document Properties</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Pages</span>
                  <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>{pdfInfoData.page_count || 0}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>File Size</span>
                  <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>{pdfInfoData.file_size_kb ? `${pdfInfoData.file_size_kb.toLocaleString()} KB` : 'N/A'}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Page Size</span>
                  <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>{pdfInfoData.page_size_mm ? `${Math.round(pdfInfoData.page_size_mm.width)} × ${Math.round(pdfInfoData.page_size_mm.height)} mm` : 'Unknown'}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Encrypted</span>
                  <span style={{ fontWeight: 600, fontSize: '1.2rem', color: pdfInfoData.encrypted ? 'var(--orange)' : 'var(--text)' }}>{pdfInfoData.encrypted ? 'Yes 🔒' : 'No 🔓'}</span>
                </div>
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '32px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>Metadata</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                {[
                  { label: 'Title', value: pdfInfoData.title },
                  { label: 'Author', value: pdfInfoData.author },
                  { label: 'Creator', value: pdfInfoData.creator },
                  { label: 'Producer', value: pdfInfoData.producer },
                  { label: 'Subject', value: pdfInfoData.subject },
                ].map((item, i) => (
                  item.value ? (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ fontWeight: 500, fontSize: '1rem', wordBreak: 'break-word' }}>{item.value}</span>
                    </div>
                  ) : null
                ))}
              </div>
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
