export default function TramiteSelector({ selected, onSelect, onContinue }) {
  return (
    <div>
      <div className="tramite-selector">
        <div
          className={`ts-card ${selected === 'placas' ? 'selected' : ''}`}
          onClick={() => onSelect('placas')}
          role="radio"
          aria-checked={selected === 'placas'}
          tabIndex={0}
        >
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>🚛</div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontFamily: 'var(--display)', fontWeight: 500, letterSpacing: '-0.3px' }}>
            Placas Federales
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
            Alta, baja, reposición o modificación de placas de servicio público federal — SICT-03-045
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--navy)', fontWeight: 500 }}>
            $4,018 derechos SICT
          </p>
        </div>

        <div
          className={`ts-card ${selected === 'doble-remolque' ? 'selected' : ''}`}
          onClick={() => onSelect('doble-remolque')}
          role="radio"
          aria-checked={selected === 'doble-remolque'}
          tabIndex={0}
        >
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>🔗</div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontFamily: 'var(--display)', fontWeight: 500, letterSpacing: '-0.3px' }}>
            Doble Semirremolque
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
            Autorización Expresa SICT-03-060 NOM-012-SCT-2-2017
          </p>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--green)', fontWeight: 500 }}>
            Gratuito ante la SICT
          </p>
        </div>
      </div>

      <div className="form-info" style={{ marginTop: '24px', marginBottom: '24px' }}>
        Los montos indicados corresponden a los derechos que se pagan directamente a la SICT.
        Los honorarios de MoBa Gestores son independientes y se cobran únicamente al concluir el trámite.
      </div>

      <button
        className="btn btn-primary"
        onClick={onContinue}
        disabled={!selected}
        style={{ width: '100%', maxWidth: '300px' }}
      >
        Continuar →
      </button>
    </div>
  )
}
