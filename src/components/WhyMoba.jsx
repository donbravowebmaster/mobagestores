function Card({ value, title, description, featured = false }) {
  const containerClasses = featured
    ? 'border border-trust-border bg-trust-light'
    : 'border border-border bg-white'
  const valueClasses = featured ? 'text-trust' : 'text-dark2'

  return (
    <div className={`rounded-lg p-8 md:p-10 ${containerClasses}`}>
      <p className={`text-4xl md:text-5xl font-light tracking-tight ${valueClasses}`}>
        {value}
      </p>
      <h3 className="mt-5 text-lg md:text-xl font-medium text-dark2">{title}</h3>
      <p className="mt-3 text-[15px] font-light leading-relaxed text-mid">
        {description}
      </p>
    </div>
  )
}

export default function WhyMoba() {
  return (
    <section id="por-que-moba" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-trust-mid uppercase">Por qué MoBa</p>
          <h2 className="mt-4 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-dark2">
            {"Lo que ningún competidor\npuede replicar."}
          </h2>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            featured
            value="30+"
            title="Años de experiencia"
            description="Tres décadas de relación profesional con la SICT y conocimiento profundo de la normatividad federal del autotransporte."
          />
          <Card
            featured
            value="$0"
            title="Sin costos por adelantado"
            description="No cobramos honorarios hasta que la SICT emita tu resolución. Tú no asumes el riesgo del trámite."
          />
          <Card
            value="MTY"
            title="Presencia directa en Monterrey"
            description="Nuestro equipo presenta el expediente personalmente ante la DGAF. Tú no necesitas trasladarte."
          />
          <Card
            value="100%"
            title="Enfocados en lo federal"
            description="Solo trabajamos placas federales y Autorización Expresa. Sin generalidades, sin desvíos: especialización absoluta."
          />
        </div>
      </div>
    </section>
  )
}
