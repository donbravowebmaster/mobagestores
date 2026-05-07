import { useState } from 'react'

const FAQS = [
  {
    q: '¿Qué documentos necesito para placas federales?',
    a: 'RFC vigente del titular, identificación oficial, comprobante de domicilio fiscal, factura o carta factura del vehículo y permiso de autotransporte federal vigente. Al contactarnos te enviamos la lista exacta para tu caso.',
  },
  {
    q: '¿Cuánto tiempo tarda el trámite?',
    a: 'Los tiempos de resolución dependen de la Dirección General de Autotransporte Federal (SICT). Lo que MoBa garantiza es que tu expediente esté completo y correcto desde el primer intento, evitando rechazos que retrasan el proceso.',
  },
  {
    q: 'Soy de otro estado, ¿pueden atenderme?',
    a: 'Sí. Revisamos tu documentación de forma digital desde cualquier estado de la República. La presentación presencial ante la SICT en Monterrey la realizamos nosotros.',
  },
  {
    q: '¿Qué es la Autorización Expresa para doble semirremolque?',
    a: 'Es el permiso que emite la SICT para que un tractocamión circule en configuración doblemente articulada en carreteras federales, conforme a la NOM-012-SCT-2-2017. Sin este documento, la unidad no puede circular legalmente.',
  },
  {
    q: '¿Cuándo y cómo pago los honorarios de MoBa?',
    a: 'Los honorarios de MoBa Gestores se cobran únicamente al concluir el trámite exitosamente. El monto se cotiza al inicio y se formaliza en un documento de servicio. No se solicitan anticipos.',
  },
]

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-white text-[15px] font-medium hover:text-white/80 transition-colors"
        >
          <span>{item.q}</span>
          <span
            className="shrink-0 text-xl leading-none font-light"
            style={{ color: '#4da3ff' }}
            aria-hidden="true"
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-white/65 text-[13px] leading-relaxed pr-8">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-dark2">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-eyebrow text-white/50 uppercase">FAQ</p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-white">
            Preguntas frecuentes.
          </h2>
          <p className="mt-5 text-base md:text-lg font-light leading-relaxed text-white/65">
            Resolvemos las dudas más comunes sobre el proceso de asesoría con MoBa.
          </p>
        </div>

        <div className="mt-12 md:mt-16 max-w-xl mx-auto">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
