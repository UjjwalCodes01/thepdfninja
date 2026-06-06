'use client';
import { useState } from 'react';
import type { ToolConfig } from '../../lib/toolConfig';
import FileDropzone from '../../components/FileDropzone';
import ToolProcessor from '../../components/ToolProcessor';

export default function ToolPageClient({ config, toolSlug }: { config: ToolConfig; toolSlug: string }) {
  const [step, setStep] = useState<'upload' | 'options' | 'process'>('upload');
  const [files, setFiles] = useState<File[]>([]);
  // Initialize options state from default values in config
  const initialOptions: Record<string, any> = {};
  config.options?.forEach(opt => {
    initialOptions[opt.key] = opt.defaultValue;
  });
  const [options, setOptions] = useState<Record<string, any>>(initialOptions);

  const handleFiles = (newFiles: File[]) => {
    const nextFiles = config.multiFile ? [...files, ...newFiles] : newFiles;
    setFiles(nextFiles);
    if (nextFiles.length > 0) {
      if (!config.multiFile) {
        // Only auto-advance for single-file tools
        const needsOptions = config.options?.some(opt => opt.defaultValue === undefined || opt.defaultValue === '');
        if (config.options?.length && needsOptions) {
          setStep('options');
        } else {
          setStep('process');
        }
      }
    }
  };

  const removeFile = (idx: number) => {
    const f = files.filter((_, i) => i !== idx);
    setFiles(f);
    if (f.length === 0) setStep('upload');
  };

  return (
    <div>
      {/* Upload Step */}
      <div style={{ display: step === 'upload' ? 'block' : 'none' }}>
        <FileDropzone
          acceptedTypes={config.acceptedTypes}
          acceptedLabel={config.acceptedTypes.join(', ')}
          multiFile={!!config.multiFile}
          onFilesSelected={handleFiles}
          files={files}
          onRemoveFile={removeFile}
        />
        {files.length > 0 && (
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
             <button className="btn btn-primary btn-lg" onClick={() => {
               const needsOptions = config.options?.some(opt => opt.defaultValue === undefined || opt.defaultValue === '');
               setStep(config.options?.length && needsOptions ? 'options' : 'process');
             }}>
               {config.options?.length && config.options.some(opt => opt.defaultValue === undefined || opt.defaultValue === '') ? 'Configure Options →' : 'Process PDF →'}
             </button>
          </div>
        )}
      </div>

      {/* Options Step */}
      {step === 'options' && config.options && (
        <div className="anim-fade-up">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text)' }}>
            Configure Options
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px' }}>
            {config.options.map(opt => (
              <div key={opt.key}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
                  {opt.label}
                </label>
                {opt.type === 'select' ? (
                  <select
                    className="input"
                    value={options[opt.key]}
                    onChange={e => setOptions({ ...options, [opt.key]: e.target.value })}
                  >
                    {opt.options?.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                ) : opt.type === 'number' ? (
                  <input
                    type="number"
                    className="input"
                    min={opt.min} max={opt.max}
                    value={options[opt.key]}
                    onChange={e => setOptions({ ...options, [opt.key]: parseInt(e.target.value) })}
                  />
                ) : opt.type === 'text' ? (
                  <input
                    type={opt.key === 'password' ? 'password' : 'text'}
                    className="input"
                    placeholder={`Enter ${opt.label.toLowerCase()}`}
                    value={options[opt.key]}
                    onChange={e => setOptions({ ...options, [opt.key]: e.target.value })}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
            <button className="btn btn-outline" onClick={() => setStep('upload')}>← Back</button>
            <button className="btn btn-primary" onClick={() => setStep('process')}>Process PDF</button>
          </div>
        </div>
      )}

      {/* Process Step */}
      {step === 'process' && (
        <ToolProcessor
          tool={toolSlug}
          files={files}
          options={options}
          apiPath={config.apiPath}
          isAsync={config.type !== 'easy'}
          onReset={() => {
            setFiles([]);
            setStep('upload');
          }}
        />
      )}
    </div>
  );
}
