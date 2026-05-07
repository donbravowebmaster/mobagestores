import { useState } from 'react'

export default function FormSection({
  title,
  children,
  isComplete = false,
  collapsible = true
}) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`form-section ${!isOpen ? 'collapsed' : ''} ${isComplete ? '' : 'incomplete'}`}>
      {collapsible ? (
        <div className="form-section-header" onClick={() => setIsOpen(!isOpen)}>
          <h3 className="form-section-title">{title}</h3>
          <div className="form-section-badge">
            {isComplete ? '✓ Completo' : ''}
          </div>
        </div>
      ) : (
        <div className="form-section-header" style={{ cursor: 'default', marginBottom: '20px' }}>
          <h3 className="form-section-title">{title}</h3>
          <div className="form-section-badge">
            {isComplete ? '✓ Completo' : ''}
          </div>
        </div>
      )}
      {isOpen && <div className="form-section-content">{children}</div>}
    </div>
  )
}
