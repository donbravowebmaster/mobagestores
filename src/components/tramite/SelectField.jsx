import { useState } from 'react'

export default function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
  error = false
}) {
  const [open, setOpen] = useState(false)

  const selectedLabel = options.find(opt => opt.value === value)?.label || label

  return (
    <div className="form-field">
      <label className={`form-label ${required ? 'required' : ''}`}>{label}</label>
      <div className="custom-select-wrapper">
        <button
          type="button"
          className="custom-select-trigger"
          onClick={() => setOpen(!open)}
          style={error ? { borderColor: '#c0392b' } : {}}
        >
          <span>{selectedLabel}</span>
          <span className={`select-arrow ${open ? 'open' : ''}`}>▼</span>
        </button>

        {open && (
          <div className="custom-select-dropdown">
            {options.map(option => (
              <button
                key={option.value}
                type="button"
                className={`custom-select-option ${value === option.value ? 'selected' : ''}`}
                onClick={() => {
                  onChange(option.value)
                  setOpen(false)
                }}
              >
                {value === option.value && <span className="checkmark">✓</span>}
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
