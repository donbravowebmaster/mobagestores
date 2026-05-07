import { useState } from 'react'

export default function FileUpload({
  id,
  label,
  required = false,
  acceptedFormats = ['PDF', 'JPG', 'PNG'],
  maxSizeMB = 10,
  helpText = '',
  multiple = false,
  file = null,
  onChange = () => {},
  onRemove = () => {}
}) {
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState('')

  const acceptStr = acceptedFormats.map(f => `.${f.toLowerCase()}`).join(',')

  const validateFile = (f) => {
    const ext = f.name.split('.').pop().toUpperCase()
    if (!acceptedFormats.includes(ext)) {
      setError(`Solo se aceptan archivos ${acceptedFormats.join(', ')}`)
      return false
    }
    if (f.size > maxSizeMB * 1024 * 1024) {
      setError(`El archivo supera el tamaño máximo de ${maxSizeMB}MB`)
      return false
    }
    return true
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && validateFile(droppedFile)) {
      setError('')
      onChange(droppedFile)
    }
  }

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && validateFile(selectedFile)) {
      setError('')
      onChange(selectedFile)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  if (file) {
    return (
      <div className="form-field">
        <label className={`form-label ${required ? 'required' : ''}`}>{label}</label>
        <div className="file-upload-filled">
          <div>
            <div className="file-upload-name">✅ {file.name}</div>
            <div className="file-upload-size">{formatFileSize(file.size)}</div>
          </div>
          <button
            className="file-upload-remove"
            onClick={() => onRemove()}
            aria-label={`Eliminar ${label}`}
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-field">
      <label className={`form-label ${required ? 'required' : ''}`}>{label}</label>
      <div
        className={`file-upload-zone ${dragOver ? 'drag-over' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById(`file-input-${id}`).click()}
      >
        <div className="file-upload-label">📎 Arrastra tu archivo aquí o haz clic para seleccionar</div>
        <div className="file-upload-hint">{acceptedFormats.join(', ')} — Máx. {maxSizeMB}MB</div>
      </div>
      <input
        id={`file-input-${id}`}
        type="file"
        className="file-upload-input"
        accept={acceptStr}
        onChange={handleFileSelect}
        aria-label={label}
      />
      {helpText && <div className="form-help">{helpText}</div>}
      {error && <div className="form-error" role="alert">{error}</div>}
    </div>
  )
}
