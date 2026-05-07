import { PlacasIcon, DobleIcon } from './Icons'

const PlusIcon = () => (
  <svg
    className="mt-[7px] shrink-0 text-green"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 1.5v9M1.5 6h9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

function ServiceCard({ icon: Icon, eyebrow, title, description, items, href }) {
  return (
    <div className="bg-white p-8 md:p-10 lg:p-12">
      <div className="mb-4">
        <Icon />
      </div>
      <p className="text-eyebrow text-trust-mid uppercase">{eyebrow}</p>
      <h3 className="mt-4 text-2xl md:text-[28px] font-light leading-[1.2] tracking-tight text-dark2">
        {title}
      </h3>
      <p className="mt-5 text-[15px] md:text-base font-light leading-relaxed text-mid">
        {description}
      </p>
      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[15px] font-light text-dark2"
          >
            <PlusIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="mt-8 inline-block text-sm font-medium text-trust hover:underline"
      >
        Consultar este servicio &rarr;
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-trust-mid uppercase">Servicios</p>
          <h2 className="mt-4 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-dark2">
            {"Especialización total.\nNada de generalidades."}
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-mid">
            Dos servicios de alta complejidad normativa.
          </p>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-border border border-border">
          <ServiceCard
            icon={PlacasIcon}
            eyebrow="Placas Federales"
            title="Asesoría y gestión documental para placas de carga"
            description="Acompañamiento integral en el proceso normativo ante la SICT para vehículos del autotransporte federal de carga."
            items={[
              'Alta en el Padrón del Autotransporte Federal',
              'Placas, tarjeta de circulación y engomado',
              'Baja, canje o reposición de placas',
              'Cambio de propietario o modalidad',
            ]}
            href="#contacto"
          />
          <ServiceCard
            icon={DobleIcon}
            eyebrow="Doble Semirremolque"
            title="Autorización Expresa para tractocamión articulado"
            description="Asesoría especializada para obtener la Autorización Expresa que permite operar configuraciones articuladas conforme a la NOM-012."
            items={[
              'Revisión de requisitos técnicos (GPS, ABS, gobernador)',
              'Expediente documental completo',
              'Seguimiento ante la DGAF',
              'Configuraciones T-S-R y T-S-S',
            ]}
            href="#contacto"
          />
        </div>
      </div>
    </section>
  )
}
