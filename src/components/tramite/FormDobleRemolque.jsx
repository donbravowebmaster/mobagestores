import FormSection from './FormSection'
import FileUpload from './FileUpload'

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
  }
  return errors
}

export default function FormDobleRemolque({
  currentStep,
  formData,
  documents,
  errors,
  onFormDataChange,
  onDocumentSelect,
  onDocumentRemove,
  onValidationError,
  onNext,
  onBack,
  onSubmit,
  isSubmitting
}) {
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

    if (currentStep === 1) {
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
        ...validateField('vinTractocamion', formData.vinTractocamion),
        ...validateField('modeloTractocamion', formData.modeloTractocamion)
      }
    } else if (currentStep === 3) {
      stepErrors = {
        ...stepErrors,
        ...validateField('vinRemolque1', formData.vinRemolque1),
        ...validateField('modeloRemolque1', formData.modeloRemolque1)
      }
      if (formData.vinRemolque2 && !VIN_PATTERN.test(formData.vinRemolque2)) {
        stepErrors.vinRemolque2 = 'VIN inválido (17 caracteres)'
      }
    } else if (currentStep === 4) {
      if (!documents.certificadoTecnico) stepErrors.certificadoTecnico = true
      if (!documents.comprobanteDomicilio) stepErrors.comprobanteDomicilio = true
      if (!documents.identificacion) stepErrors.identificacion = true
      if (!documents.comprobantePropiedadVehiculos) stepErrors.comprobantePropiedadVehiculos = true
      if (formData.requisitoTecnico === 'no') stepErrors.requisitoTecnico = true
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
        <FormSection title="Información importante" collapsible={false}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-note">
              <strong>Autorización Expresa SICT-03-060</strong> — NOM-012-SCT-2-2017
            </div>

            <div style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              <p>
                La autorización para prestar servicios de autotransporte federal con tractocamión y doble semirremolque está sujeta a requisitos técnicos y administrativos específicos.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Requisitos técnicos mínimos:</strong>
              </p>
              <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                <li>Tractocamión con capacidad de peso bruto vehicular mínima de 25 toneladas</li>
                <li>Doble semirremolque conforme a NOM-012-SCT-2-2017</li>
                <li>Sistema de frenado ABS en todos los ejes</li>
                <li>Certificado técnico vigente</li>
              </ul>
            </div>

            <div className="form-warning">
              <strong>Nota importante:</strong> Este trámite es gratuito ante la SICT. Los honorarios de MoBa Gestores se cobran únicamente al concluir el expediente.
            </div>
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
        <FormSection title="Tractocamión" isComplete={formData.vinTractocamion && formData.modeloTractocamion}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-field">
              <label className="form-label required">VIN del tractocamión</label>
              <input
                type="text"
                className="form-input"
                value={formData.vinTractocamion || ''}
                onChange={(e) => handleFormDataChange('vinTractocamion', e.target.value.toUpperCase())}
                placeholder="17 caracteres"
                style={errors.vinTractocamion ? { borderColor: '#c0392b' } : {}}
              />
              {errors.vinTractocamion && <div className="form-error">{errors.vinTractocamion}</div>}
            </div>

            <div className="form-field">
              <label className="form-label required">Modelo del tractocamión</label>
              <input
                type="text"
                className="form-input"
                value={formData.modeloTractocamion || ''}
                onChange={(e) => handleFormDataChange('modeloTractocamion', e.target.value)}
                placeholder="Ej: Volvo FH 2019"
                style={errors.modeloTractocamion ? { borderColor: '#c0392b' } : {}}
              />
              {errors.modeloTractocamion && <div className="form-error">{errors.modeloTractocamion}</div>}
            </div>

            <div className="form-field">
              <label className="form-label">Placas del tractocamión</label>
              <input
                type="text"
                className="form-input"
                value={formData.placasTractocamion || ''}
                onChange={(e) => handleFormDataChange('placasTractocamion', e.target.value.toUpperCase())}
                placeholder="XXX-000-XX"
              />
            </div>
          </div>
        </FormSection>
      )}

      {currentStep === 3 && (
        <FormSection title="Semirremolques" isComplete={formData.vinRemolque1 && formData.modeloRemolque1}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Primer semirremolque</h4>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div className="form-field">
                  <label className="form-label required">VIN</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.vinRemolque1 || ''}
                    onChange={(e) => handleFormDataChange('vinRemolque1', e.target.value.toUpperCase())}
                    placeholder="17 caracteres"
                    style={errors.vinRemolque1 ? { borderColor: '#c0392b' } : {}}
                  />
                  {errors.vinRemolque1 && <div className="form-error">{errors.vinRemolque1}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label required">Modelo</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.modeloRemolque1 || ''}
                    onChange={(e) => handleFormDataChange('modeloRemolque1', e.target.value)}
                    placeholder="Ej: Wabash 2018"
                    style={errors.modeloRemolque1 ? { borderColor: '#c0392b' } : {}}
                  />
                  {errors.modeloRemolque1 && <div className="form-error">{errors.modeloRemolque1}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">Placas</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.placasRemolque1 || ''}
                    onChange={(e) => handleFormDataChange('placasRemolque1', e.target.value.toUpperCase())}
                    placeholder="XXX-000-XX"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Segundo semirremolque (opcional)</h4>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div className="form-field">
                  <label className="form-label">VIN</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.vinRemolque2 || ''}
                    onChange={(e) => handleFormDataChange('vinRemolque2', e.target.value.toUpperCase())}
                    placeholder="17 caracteres (opcional)"
                    style={errors.vinRemolque2 ? { borderColor: '#c0392b' } : {}}
                  />
                  {errors.vinRemolque2 && <div className="form-error">{errors.vinRemolque2}</div>}
                </div>

                <div className="form-field">
                  <label className="form-label">Modelo</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.modeloRemolque2 || ''}
                    onChange={(e) => handleFormDataChange('modeloRemolque2', e.target.value)}
                    placeholder="Ej: Utility 2017"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Placas</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.placasRemolque2 || ''}
                    onChange={(e) => handleFormDataChange('placasRemolque2', e.target.value.toUpperCase())}
                    placeholder="XXX-000-XX"
                  />
                </div>
              </div>
            </div>
          </div>
        </FormSection>
      )}

      {currentStep === 4 && (
        <FormSection title="Documentos" isComplete={documents.certificadoTecnico && documents.comprobanteDomicilio && documents.identificacion && documents.comprobantePropiedadVehiculos}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div className="form-field">
              <label className="form-label required">Requisitos técnicos cumplidos</label>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="requisitoTecnico"
                    value="yes"
                    checked={formData.requisitoTecnico === 'yes'}
                    onChange={(e) => onFormDataChange({ requisitoTecnico: e.target.value })}
                  />
                  <span>Sí, cumple con NOM-012-SCT-2-2017</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="requisitoTecnico"
                    value="no"
                    checked={formData.requisitoTecnico === 'no'}
                    onChange={(e) => onFormDataChange({ requisitoTecnico: e.target.value })}
                  />
                  <span>No, necesita adecuaciones</span>
                </label>
              </div>
              {errors.requisitoTecnico && (
                <div className="form-warning" style={{ marginTop: '12px' }}>
                  ⚠️ Tu vehículo debe cumplir con los requisitos técnicos para proceder.
                </div>
              )}
            </div>

            <FileUpload
              id="certificado-tecnico"
              label="Certificado técnico del vehículo"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.certificadoTecnico}
              onChange={(file) => onDocumentSelect('certificadoTecnico', file)}
              onRemove={() => onDocumentRemove('certificadoTecnico')}
              helpText="Certificado de verificación técnico-mecánica vigente"
            />

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
              label="Comprobante de propiedad de los vehículos"
              required
              acceptedFormats={['PDF', 'JPG', 'PNG']}
              maxSizeMB={10}
              file={documents.comprobantePropiedadVehiculos}
              onChange={(file) => onDocumentSelect('comprobantePropiedadVehiculos', file)}
              onRemove={() => onDocumentRemove('comprobantePropiedadVehiculos')}
              helpText="Títulos de propiedad o facturas de todos los vehículos"
            />
          </div>
        </FormSection>
      )}

      {currentStep === 5 && (
        <FormSection title="Confirmación" collapsible={false}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div className="form-note">
              <strong>Resumen de tu solicitud:</strong>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>RFC</div>
                <div style={{ fontWeight: 500 }}>{formData.rfc}</div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontWeight: 500 }}>{formData.email}</div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>Tractocamión VIN</div>
                <div style={{ fontWeight: 500 }}>{formData.vinTractocamion}</div>
              </div>
              <div>
                <div style={{ color: 'var(--ink-3)', marginBottom: '4px' }}>Primer remolque VIN</div>
                <div style={{ fontWeight: 500 }}>{formData.vinRemolque1}</div>
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
        {currentStep < 5 ? (
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
