'use client';
import { useState, useRef, useCallback, useId } from 'react';

interface FileDropzoneProps {
  acceptedTypes: string[];
  acceptedLabel: string;
  multiFile: boolean;
  onFilesSelected: (files: File[]) => void;
  files: File[];
  onRemoveFile: (index: number) => void;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

export default function FileDropzone({ acceptedTypes, acceptedLabel, multiFile, onFilesSelected, files, onRemoveFile }: FileDropzoneProps) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropId = useId();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files);
    const valid = dropped.filter(f => acceptedTypes.some(t => f.type === t || f.type.startsWith(t.replace('*', ''))));
    if (valid.length) onFilesSelected(valid);
  }, [acceptedTypes, onFilesSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) onFilesSelected(Array.from(e.target.files));
  };

  return (
    <div>
      {/* Drop Zone */}
      <div
        id={dropId}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label="Upload file — drop here or click to browse"
        onKeyDown={e => e.key === 'Enter' && inputRef.current?.click()}
        style={{
          background: dragOver ? 'rgba(0,0,0,0.03)' : 'transparent',
          borderRadius: '24px',
          padding: '32px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.18s ease',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <span style={{ 
            background: '#e32028', color: 'white', 
            fontSize: '1.5rem', fontWeight: 700, 
            padding: '24px 48px', borderRadius: '8px',
            boxShadow: '0 4px 14px rgba(227,32,40,0.3)',
            pointerEvents: 'none',
            display: 'inline-block'
          }}>
            {dragOver ? 'Drop files to upload' : 'Select PDF files'}
          </span>
          
          <p style={{ fontSize: '0.95rem', color: '#666666', fontWeight: 400, marginTop: '4px' }}>
            or drop PDFs here
          </p>
        </div>
        <input
          ref={inputRef}
          id={`${dropId}-input`}
          type="file"
          accept={acceptedTypes.join(',')}
          multiple={multiFile}
          onChange={handleChange}
          style={{ display: 'none' }}
          aria-label="File input"
        />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {files.map((file, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--orange)' }}>
              <span style={{ fontSize: '20px' }}>
                {file.type === 'application/pdf' ? '📄' : file.type.startsWith('image/') ? '🖼' : file.name.endsWith('.docx') || file.name.endsWith('.doc') ? '📝' : '📁'}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{formatBytes(file.size)}</p>
              </div>
              <button
                onClick={e => { e.stopPropagation(); onRemoveFile(i); }}
                aria-label={`Remove ${file.name}`}
                style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s', flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--orange)'; (e.currentTarget as HTMLElement).style.color = 'var(--orange)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
