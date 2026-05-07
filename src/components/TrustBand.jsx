function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center px-8 md:px-14">
      <p className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
        {value}
      </p>
      <p className="mt-2 text-sm font-light text-white/50">{label}</p>
    </div>
  )
}

export default function TrustBand() {
  return (
    <section className="bg-trust text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32 text-center">
        <h2 className="mx-auto max-w-3xl whitespace-pre-line text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-white">
          {"La diferencia que importa:\npagas cuando concluye."}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/65">
          Nuestros honorarios se cobran únicamente cuando la SICT emite tu resolución. Sin anticipos, sin pagos adelantados, sin riesgo para tu operación.
        </p>

        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          <Stat value="30+" label="Años" />
          <Stat value="$0" label="Anticipos requeridos" />
          <Stat value="2" label="Servicios" />
        </div>
      </div>
    </section>
  )
}
