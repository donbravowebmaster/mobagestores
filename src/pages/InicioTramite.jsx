import { useState, useReducer, useEffect } from 'react'
import { Navbar, Footer } from '../components/Site'
import TramiteSelector from '../components/tramite/TramiteSelector'
import StepIndicator from '../components/tramite/StepIndicator'
import FormPlacas from '../components/tramite/FormPlacas'
import FormDobleRemolque from '../components/tramite/FormDobleRemolque'
import ConfirmacionEnvio from '../components/tramite/ConfirmacionEnvio'

const STEPS_PLACAS = ['Tipo de trámite', 'Datos personales', 'Datos del vehículo', 'Documentos', 'Confirmación']
const STEPS_DOBLE = ['Información', 'Datos personales', 'Tractocamión', 'Semirremolques', 'Documentos', 'Confirmación']

function formReducer(state, action) {
  switch (action.type) {
    case 'SELECT_TRAMITE':
      return { ...state, tramiteType: action.payload }
    case 'SET_STEP':
      return { ...state, currentStep: action.payload }
    case 'SET_SUB_TYPE':
      return { ...state, subType: action.payload }
    case 'UPDATE_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } }
    case 'SET_DOCUMENT':
      return {
        ...state,
        documents: { ...state.documents, [action.payload.key]: action.payload.file }
      }
    case 'REMOVE_DOCUMENT':
      const newDocs = { ...state.documents }
      delete newDocs[action.payload]
      return { ...state, documents: newDocs }
    case 'SET_ERRORS':
      return { ...state, errors: action.payload }
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.payload }
    case 'SET_SUBMITTED':
      return { ...state, isSubmitted: true, folioNumber: action.payload }
    case 'RESET':
      return {
        tramiteType: null,
        currentStep: 0,
        subType: null,
        formData: {},
        documents: {},
        errors: {},
        isSubmitting: false,
        isSubmitted: false,
        folioNumber: null
      }
    default:
      return state
  }
}

const INITIAL_STATE = {
  tramiteType: null,
  currentStep: 0,
  subType: null,
  formData: {},
  documents: {},
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
  folioNumber: null
}

export default function InicioTramite() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE, (initial) => {
    const saved = sessionStorage.getItem('tramite_state')
    return saved ? JSON.parse(saved) : initial
  })

  useEffect(() => {
    sessionStorage.setItem('tramite_state', JSON.stringify(state))
  }, [state])

  const handleSelectTramite = (tramiteType) => {
    dispatch({ type: 'SELECT_TRAMITE', payload: tramiteType })
    dispatch({ type: 'SET_STEP', payload: 0 })
  }

  const handleContinue = () => {
    if (!state.tramiteType) return
    dispatch({ type: 'SET_STEP', payload: 1 })
  }

  const handleBack = () => {
    if (state.currentStep === 0 && state.tramiteType) {
      dispatch({ type: 'SELECT_TRAMITE', payload: null })
    } else if (state.currentStep > 0) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 })
    }
  }

  const handleNext = () => {
    const steps = state.tramiteType === 'placas' ? STEPS_PLACAS : STEPS_DOBLE
    if (state.currentStep < steps.length - 1) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 })
    }
  }

  const handleSubmit = async () => {
    dispatch({ type: 'SET_SUBMITTING', payload: true })
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const year = new Date().getFullYear()
      const random = Math.random().toString(36).substring(2, 10).toUpperCase()
      const folio = `MBG-${year}-${random}`
      dispatch({ type: 'SET_SUBMITTED', payload: folio })
      localStorage.setItem(`folio_${folio}`, JSON.stringify(state))
    } catch (error) {
      console.error('Error submitting:', error)
    } finally {
      dispatch({ type: 'SET_SUBMITTING', payload: false })
    }
  }

  const steps = state.tramiteType === 'placas' ? STEPS_PLACAS : STEPS_DOBLE

  return (
    <>
      <Navbar />
      <main>
        <section className="tramite-hero">
          <div className="container">
            <div className="hero-content" style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '40px' }}>
              <div className="badge green" style={{ display: 'inline-block', marginBottom: '16px' }}>
                <span className="dot"></span>
                <span>SICT — Autotransporte Federal</span>
              </div>
              <h1 className="display-lg" style={{ marginTop: 0, marginBottom: '12px' }}>
                Inicio de trámite
              </h1>
              <p className="body-lg" style={{ color: 'var(--ink-3)', marginBottom: 0 }}>
                Inicia tu expediente digital para trámites de transporte federal de forma ágil y segura
              </p>
            </div>
          </div>
        </section>

        {state.isSubmitted ? (
          <section className="tramite-container">
            <div className="container">
              <ConfirmacionEnvio
                tramiteType={state.tramiteType}
                folioNumber={state.folioNumber}
                email={state.formData.email}
                telefono={state.formData.telefono}
                onRestart={() => {
                  dispatch({ type: 'RESET' })
                  sessionStorage.removeItem('tramite_state')
                }}
              />
            </div>
          </section>
        ) : !state.tramiteType ? (
          <section className="tramite-container">
            <div className="container">
              <TramiteSelector
                selected={state.tramiteType}
                onSelect={handleSelectTramite}
                onContinue={handleContinue}
              />
            </div>
          </section>
        ) : (
          <section className="tramite-container">
            <div className="container">
              <div style={{ marginBottom: '32px' }}>
                <StepIndicator
                  steps={steps}
                  currentStep={state.currentStep}
                  totalSteps={steps.length}
                />
              </div>

              {state.tramiteType === 'placas' ? (
                <FormPlacas
                  currentStep={state.currentStep}
                  subType={state.subType}
                  formData={state.formData}
                  documents={state.documents}
                  errors={state.errors}
                  onSubTypeSelect={(subType) => dispatch({ type: 'SET_SUB_TYPE', payload: subType })}
                  onFormDataChange={(data) => dispatch({ type: 'UPDATE_FORM_DATA', payload: data })}
                  onDocumentSelect={(key, file) => dispatch({ type: 'SET_DOCUMENT', payload: { key, file } })}
                  onDocumentRemove={(key) => dispatch({ type: 'REMOVE_DOCUMENT', payload: key })}
                  onValidationError={(errors) => dispatch({ type: 'SET_ERRORS', payload: errors })}
                  onNext={handleNext}
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                  isSubmitting={state.isSubmitting}
                />
              ) : (
                <FormDobleRemolque
                  currentStep={state.currentStep}
                  formData={state.formData}
                  documents={state.documents}
                  errors={state.errors}
                  onFormDataChange={(data) => dispatch({ type: 'UPDATE_FORM_DATA', payload: data })}
                  onDocumentSelect={(key, file) => dispatch({ type: 'SET_DOCUMENT', payload: { key, file } })}
                  onDocumentRemove={(key) => dispatch({ type: 'REMOVE_DOCUMENT', payload: key })}
                  onValidationError={(errors) => dispatch({ type: 'SET_ERRORS', payload: errors })}
                  onNext={handleNext}
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                  isSubmitting={state.isSubmitting}
                />
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
