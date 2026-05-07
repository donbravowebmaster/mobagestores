const STATS = [
  { value: '30+', label: 'Años' },
  { value: '100%', label: 'Pagas al concluir' },
  { value: 'Nacional', label: 'Cobertura total' },
]

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="inicio" className="bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        <span className="inline-flex items-center gap-2 bg-trust-light border border-trust-border text-trust text-xs md:text-sm font-medium px-4 py-1.5 rounded-full">
          <span className="text-trust">●</span>
          Más de 30 años de experiencia
        </span>

        <h1
          className="mt-6 md:mt-8 text-dark2 font-semibold text-[34px] leading-[1.1] sm:text-[40px] md:text-[46px] tracking-[-1.5px]"
        >
          Asesoría y gestión de placas
          <br />
          federales y permisos de doble
          <br />
          semirremolque.
          <br />
          <span className="text-green">Sin complicaciones.</span>
        </h1>

        <div className="mt-8 md:mt-10 max-w-2xl mx-auto h-48 md:h-56 rounded-lg overflow-hidden bg-gradient-to-b from-sky-100 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              📦 Foto de camión doble semirremolque
            </p>
            <p className="text-gray-400 text-xs mt-1">
              (Agrega tu foto aquí)
            </p>
          </div>
        </div>

        <p className="mt-8 md:mt-10 text-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Acompañamos a transportistas en cada paso del trámite, con asesoría
          experta y cobertura nacional.
        </p>

        <div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, '#contacto')}
            className="inline-flex items-center justify-center bg-trust hover:bg-trust-mid text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
          >
            Iniciar consulta gratuita
          </a>
          <a
            href="#servicios"
            onClick={(e) => scrollTo(e, '#servicios')}
            className="inline-flex items-center justify-center text-trust hover:text-trust-mid text-sm md:text-base font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
          >
            Ver servicios →
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
            {STATS.map((stat) => (
              <li key={stat.label}>
                <div className="text-trust text-3xl md:text-4xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-soft text-sm">{stat.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
