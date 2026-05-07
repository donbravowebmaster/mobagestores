export default function StepIndicator({ steps, currentStep, totalSteps }) {
  const isMobile = window.innerWidth < 412

  if (isMobile) {
    return (
      <div className="step-mobile-label">
        Paso {currentStep + 1} de {totalSteps}
      </div>
    )
  }

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: index < steps.length - 1 ? '1' : 'auto' }}>
          <div
            className={`step-dot ${index < currentStep ? 'done' : index === currentStep ? 'active' : ''}`}
            title={step}
          >
            {index < currentStep ? '✓' : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`step-connector ${index < currentStep ? 'done' : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}
