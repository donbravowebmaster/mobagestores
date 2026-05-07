export default function ConfirmacionEnvio({
  tramiteType,
  folioNumber,
  email,
  telefono,
  onRestart
}) {
  const tramiteLabel = tramiteType === 'placas' ? 'Placas Federales' : 'Doble Semirremolque'

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '60px' }}>
      <div style={{ fontSize: '56px', marginBottom: '24px' }}>✅</div>

      <h2 className="display-md" style={{ marginBottom: '16px' }}>
        Tu solicitud fue enviada
      </h2>

      <p className="body-lg" style={{ color: 'var(--ink-3)', marginBottom: '40px' }}>
        Hemos recibido tu expediente. Te contactaremos a través de{' '}
        <strong>WhatsApp / Teléfono</strong> para confirmar los siguientes pasos.
      </p>

      <div style={{
        backgroundColor: 'var(--bg-2)',
        border: '1px solid var(--line)',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '32px',
        maxWidth: '400px',
        margin: '0 auto 32px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 500, marginBottom: '8px' }}>
            Tu folio de seguimiento
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--navy)',
            fontFamily: 'monospace',
            wordBreak: 'break-all'
          }}>
            {folioNumber}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--ink-3)', marginBottom: '20px' }}>
            <strong>Tipo de trámite:</strong> {tramiteLabel}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--ink-3)', marginBottom: '8px' }}>
            <strong>Email de contacto:</strong> {email || 'No proporcionado'}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
            <strong>Teléfono:</strong> {telefono || 'No proporcionado'}
          </div>
        </div>
      </div>

      <div className="form-info" style={{ marginBottom: '32px' }}>
        Guarda tu folio de seguimiento. Te lo pediremos cuando nos contactes para actualizaciones.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px', margin: '0 auto' }}>
        <a
          href={`https://wa.me/?text=Hola%20MoBa%20Gestores%2C%20tengo%20una%20consulta%20sobre%20mi%20folio%20${encodeURIComponent(folioNumber)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          💬 Contactar por WhatsApp
        </a>

        <button
          className="btn btn-secondary"
          onClick={onRestart}
        >
          Iniciar nuevo trámite
        </button>
      </div>

      <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
        <div className="form-note">
          <strong>¿Preguntas frecuentes?</strong>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--ink-3)', marginTop: '12px' }}>
          Revisa nuestra sección de <a href="/" style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>Preguntas Frecuentes</a> o{' '}
          <a href="/" style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>contáctanos directamente</a>.
        </p>
      </div>
    </div>
  )
}
