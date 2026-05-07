function Step({ number, title, text }) {
  return (
    <div className="bg-white p-7 md:p-9">
      <p className="text-eyebrow text-trust-mid">{number}</p>
      <h3 className="mt-4 text-xl md:text-2xl font-light leading-tight tracking-tight text-dark2">
        {title}
      </h3>
      <p className="mt-4 whitespace-pre-line text-[15px] font-light leading-relaxed text-mid">
        {text}
      </p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="como-funciona" className="bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-trust-mid uppercase">Proceso</p>
          <h2 className="mt-4 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-dark2">
            {"Cuatro pasos.\nCero traslados."}
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-mid">
            Tu expediente avanza sin que tengas que dejar tu operación. Nosotros nos presentamos en Monterrey por ti.
          </p>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border border border-border">
          <Step
            number="01"
            title="Contacto inicial"
            text={'Nos describes tu situación por WhatsApp o formulario.\nSin costo, sin compromiso.'}
          />
          <Step
            number="02"
            title="Revisión documental"
            text={'Te enviamos la lista exacta de documentos.\nPuedes enviarnos copias digitales.'}
          />
          <Step
            number="03"
            title="Presentación ante SICT"
            text={'Nuestro equipo en Monterrey presenta el expediente\nante la DGAF.'}
          />
          <Step
            number="04"
            title="Entrega y pago"
            text={'Cuando la SICT emite tu resolución, recibes tus\ndocumentos. Solo entonces cobran los honorarios de MoBa.'}
          />
        </div>

        <div className="mt-10 rounded-md border border-trust-border bg-trust-light p-6 md:p-7">
          <p className="whitespace-pre-line text-[15px] font-light leading-relaxed text-trust">
            {'Los tiempos de resolución dependen exclusivamente de la SICT.\nMoBa garantiza que tu expediente esté correcto e integrado para evitar observaciones, requerimientos adicionales o demoras evitables.'}
          </p>
        </div>
      </div>
    </section>
  )
}
