import FormSection from './FormSection'
import FileUpload from './FileUpload'
import SelectField from './SelectField'

const RFC_PATTERN = /^[A-ZÑ&]{3,4}\d{6}(?:HOMXXXXXX|[A-Z0-9]{3})$/i
const CURP_PATTERN = /^[A-Z]{4}\d{6}[A-Z0-9]{6}[0-9]{2}$/i
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEL_PATTERN = /^\d{10}$/
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/i

function validateField(name, value) {
  const errors = {}

  switch (name) {
    case 'rfc':
      if (!value) errors.rfc = 'RFC es requerido'
      else if (!RFC_PATTERN.test(value)) errors.rfc = 'RFC inválido'
      break
    case 'curp':
      if (!value) errors.curp = 'CURP es requerido'
      else if (!CURP_PATTERN.test(value)) errors.curp = 'CURP inválido'
      break
    case 'nombre':
      if (!value?.trim()) errors.nombre = 'Nombre es requerido'
      break
    case 'email':
      if (!value) errors.email = 'Email es requerido'
      else if (!EMAIL_PATTERN.test(value)) errors.email = 'Email inválido'
      break
    case 'telefono':
      if (!value) errors.telefono = 'Teléfono es requerido'
      else if (!TEL_PATTERN.test(value.replace(/\D/g, ''))) errors.telefono = 'Teléfono debe ser 10 dígitos'
      break
    case 'vin':
      if (!value) errors.vin = 'VIN es requerido'
      else if (!VIN_PATTERN.test(value)) errors.vin = 'VIN inválido (17 caracteres)'
      break
    case 'tipoServicio':
      if (!value) errors.tipoServicio = 'Tipo de servicio es requerido'
      break
  }
  return errors
}

export default function FormPlacas({
  currentStep,
  subType,
  formData,
  documents,
  errors,
  onSubTypeSelect,
  onFormDataChange,
  onDocumentSelect,
  onDocumentRemove,
  onValidationError,
  onNext,
  onBack,
  onSubmit,
  isSubmitting
}) {
  const subTypeOptions = [
    { value: 'alta', label: 'Alta de placa nueva' },
    { value: 'baja', label: 'Baja de placa' },
    { value: 'reposicion', label: 'Reposición de placa' },
    { value: 'modificacion', label: 'Modificación de datos' },
    { value: 'nosabe', label: 'No sé cuál es mi caso' }
  ]

  const handleFormDataChange = (key, value) => {
    onFormDataChange({ [key]: value })
    const fieldErrors = validateField(key, value)
    if (Object.keys(fieldErrors).length === 0) {
      const newErrors = { ...errors }
      delete newErrors[key]
      onValidationError(newErrors)
    }
  }

  const validateStep = () => {
    let stepErrors = {}

    if (currentStep === 0 && !subType) {
      stepErrors.subType = true
    } else if (currentStep === 1) {
      stepErrors = {
        ...stepErrors,
        ...validateField('rfc', formData.rfc),
        ...validateField('curp', formData.curp),
        ...validateField('nombre', formData.nombre),
        ...validateField('email', formData.email),
        ...validateField('telefono', formData.telefono)
      }
    } else if (currentStep === 2) {
      stepErrors = {
        ...stepErrors,
        ...validateField('vin', formData.vin),
        ...validateField('tipoServicio', formData.tipoServicio)
      }
    } else if (currentStep === 3) {
      if (!documents.comprobanteDomicilio) stepErrors.comprobanteDomicilio = true
      if (!documents.identificacion) stepErrors.identificacion = true
      if (!documents.comprobantePropiedadVehiculo) stepErrors.comprobantePropiedadVehiculo = true
      if (!documents.compruebaEstatus) stepErrors.compruebaEstatus = true
    }

    if (Object.keys(stepErrors).length > 0) {
      onValidationError(stepErrors)
      return false
    }
    return true
  }

  const handleNextClick = () => {
    if (validateStep()) {
      onNext()
    }
  }

  const handleSubmitClick = () => {
    if (validateStep()) {
      onSubmit()
    }
  }

  return (
    <div className="form-step">
      {currentStep === 0 && (
        <FormSection title="Tipo de trámite" collapsible={false}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)', marginBottom: '20px' }}>
            Selecciona qué tipo de trámite necesitas realizar con tus placas federales
          </p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {subTypeOptions.map(option => (
              <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="subType"
                  value={option.value}
                  checked={subType === option.value}
                  onChange={(e) => onSubTypeSelect(e.target.value)}
                  style={{ cursor: 'pointer' }}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </FormSection>
      )}

      {currentStep === 1 && (
        <FormSection title="Datos personales" isComplete={formData.rfc && formData.email}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-field">
              <label className="form-label required">RFC</label>
              <input
                type="text"
                className="form-input"
                value={formData.rfc || ''}
                onChange={(e) => handleFormDataChange('rfc', e.target.value.toUpperCase())}
                placeholder="XXXXXX000000XXX"
                style={errors.rfc ? { borderColor: '#c0392b' } : {}}
              />
              {errors.rfc && <div className="form-error">{errors.rfc}</div>}
            </div>

            <div className="form-field">
              <label className="form-label required">CURP</label>
              <input
                type="text"
                className="form-input"
                value={formData.curp || ''}
                onChange={(e) => handleFormDataChange('curp', e.target.value.toUpperCase())}
                placeholder="XXXX000000XXXXX00"
                style={errors.curp ? { borderColor: '#c0392b' } : {}}
              />
              {errors.curp && <div className="form-error">{errors.curp}</div>}
            </div>

            <div className="form-field">
              <label className="form-label required">Nombre completo</label>
              <input
                type="text"
                className="form-input"
                value={formData.nombre || ''}
                onChange={(e) => handleFormDataChange('nombre', e.target.value)}
                placeholder="Tu nombre completo"
                style={errors.nombre ? { borderColor: '#c0392b' } : {}}
              />
              {errors.nombre && <div className="form-error">{errors.nombre}</div>}
            </div>

            <div className="form-field">
              <label className="form-label required">Correo electrónico</label>
              <input
                type="email"
                className="form-input"
                value={formData.email || ''}
                onChange={(e) => handleFormDataChange('email', e.target.value)}
                placeholder="tu@email.com"
                style={errors.email ? { borderColor: '#c0392b' } : {}}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-field">
              <label className="form-label required">Teléfono / WhatsApp</label>
              <input
                type="tel"
                className="form-input"
                value={formData.telefono || ''}
                onChange={(e) => handleFormDataChange('telefono', e.target.value)}
                placeholder="1234567890"
                style={errors.telefono ? { borderColor: '#c0392b' } : {}}
              />
              {errors.telefono && <div className="form-error">{errors.telefono}</div>}
            </div>
          </div>
        </FormSection>
      )}

      {currentStep === 2 && (
        <FormSection title="Datos del vehículo" isComplete={formData.vin && formData.tipoServicio}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-field">
              <label className="form-label required">VIN del vehículo</label>
              <input
                type="text"
                className="form-input"
                value={formData.vin || ''}
                onChange={(e) => handleFormDataChange('vin', e.target.value.toUpperCase())}
                placeholder="17 caracteres"
                style={errors.vin ? { borderColor: '#c0392b' } : {}}
              />
              {errors.vin && <div className="form-error">{errors.vin}</div>}
            </div>

            <div className="form-field">
              <label className="form-label">Placas actuales (opcional)</label>
              <input
                type="text"
                className="form-input"
                value={formData.placasActuales || ''}
                onChange={(e) => handleFormDataChange('placasActuales', e.target.value.toUpperCase())}
                placeholder="XXX-000-XX"
              />
            </div>

            <SelectField
              label="Tipo de servicio"
              value={formData.tipoServicio || ''}
              onChange={(value) => handleFormDataChange('tipoServicio', value)}
              required
              error={!!errors.tipoServicio}
              options={[
                { value: 'carga', label: 'Transporte de carga' },
                { value: 'pasajeros', label: 'Transporte de pasajeros' },
                { value: 'turismo', label: 'Turismo' }
              ]}
            />
            {errors.tipoServicio && <div className="form-error">{errors.tipoServicio}</div>}
          </div>
        </FormSection>
      )}

      {currentStep === 3 && (
        <FormSection title="Documentos" isComplete={documents.comprobanteDomicilio && documents.identificacion && documents.comprobantePropiedadVehiculo && documents.compruebaEstatus}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <FileUpload
              id="comprobante-domicilio"
              label="Comprobante de domicilio"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.comprobanteDomicilio}
              onChange={(file) => onDocumentSelect('comprobanteDomicilio', file)}
              onRemove={() => onDocumentRemove('comprobanteDomicilio')}
              helpText="Recibo de servicios (agua, luz, gas) de los últimos 3 meses"
            />

            <FileUpload
              id="identificacion"
              label="Identificación oficial"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.identificacion}
              onChange={(file) => onDocumentSelect('identificacion', file)}
              onRemove={() => onDocumentRemove('identificacion')}
              helpText="Cédula profesional, pasaporte o credencial de elector"
            />

            <FileUpload
              id="comprobante-propiedad"
              label="Comprobante de propiedad del vehículo"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.comprobantePropiedadVehiculo}
              onChange={(file) => onDocumentSelect('comprobantePropiedadVehiculo', file)}
              onRemove={() => onDocumentRemove('comprobantePropiedadVehiculo')}
              helpText="Título de propiedad, factura, o póliza de seguros"
            />

            <FileUpload
              id="comprueba-estatus"
              label="Comprobante de estatus ante Hacienda"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.compruebaEstatus}
              onChange={(file) => onDocumentSelect('compruebaEstatus', file)}
              onRemove={() => onDocumentRemove('compruebaEstatus')}
              helpText="Constancia de inscripción en el RFC"
            />
          </div>
        </FormSection>
      )}

      {currentStep === 4 && (
        <FormSection title="Confirmación" collapsible={false}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div className="form-note">
              <strong>Resumen de tu solicitud:</strong>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>Tipo de trámite</div>
                <div style={{ fontWeight: 500 }}>
                  {subTypeOptions.find(o => o.value === subType)?.label}
                </div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>RFC</div>
                <div style={{ fontWeight: 500 }}>{formData.rfc}</div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontWeight: 500 }}>{formData.email}</div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>VIN</div>
                <div style={{ fontWeight: 500 }}>{formData.vin}</div>
              </div>
            </div>

            <div className="form-info">
              Al continuar, autorizo que MoBa Gestores gestione mi expediente ante la SICT bajo los términos de su Aviso de Privacidad.
            </div>
          </div>
        </FormSection>
      )}

      <div style={{ display: 'flex', gap: '12px', marginTop: '32px', justifyContent: 'space-between' }}>
        <button
          className="btn btn-secondary"
          onClick={onBack}
          disabled={isSubmitting}
        >
          ← Atrás
        </button>
        {currentStep < 4 ? (
          <button
            className="btn btn-primary"
            onClick={handleNextClick}
            disabled={isSubmitting}
          >
            Continuar →
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleSubmitClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando…' : 'Enviar solicitud'}
          </button>
        )}
      </div>
    </div>
  )
}
