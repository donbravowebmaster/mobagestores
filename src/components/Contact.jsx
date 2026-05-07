import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Listbox } from '@headlessui/react'

const ESTADOS = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango',
  'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
  'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla',
  'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora',
  'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
  'Otro',
]

const SERVICIOS = [
  'Placas federales',
  'Doble semirremolque (Autorización Expresa)',
  'No estoy seguro',
]

const INITIAL_FORM = {
  nombre: '',
  telefono: '',
  estado: '',
  servicio: '',
  mensaje: '',
}

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2Z" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

function InfoItem({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-trust-light text-trust">
        {icon}
      </div>
      <div className="text-[14px] text-dark2 leading-relaxed pt-1">
        {children}
      </div>
    </div>
  )
}

function CustomListbox({ label, options, value, onChange, disabled, placeholder }) {
  const ChevronIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )

  return (
    <div>
      <label className="block text-[13px] font-medium text-dark2 mb-1.5">
        {label}
      </label>
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <Listbox.Button
            className={`w-full px-4 py-2.5 text-left text-[14px] text-dark2 bg-white border border-border rounded-lg focus:outline-none focus:border-trust focus:ring-2 focus:ring-trust/15 transition-colors disabled:opacity-50 flex items-center justify-between ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <span className={value ? 'text-dark2' : 'text-soft'}>
              {value || placeholder}
            </span>
            <ChevronIcon />
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 w-full mt-2 bg-white border border-border rounded-lg shadow-lg py-1 max-h-48 overflow-auto">
            {options.map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  `px-4 py-2.5 text-[14px] cursor-pointer transition-colors ${
                    active ? 'bg-trust-light text-trust' : 'text-dark2'
                  }`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.nombre,
            from_phone: form.telefono,
            from_estado: form.estado,
            from_servicio: form.servicio,
            message: form.mensaje,
          },
          { publicKey }
        )
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err && err.text
          ? err.text
          : 'No pudimos enviar tu mensaje. Por favor intenta de nuevo o escríbenos por WhatsApp.'
      )
    }
  }

  const isLoading = status === 'loading'

  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-green-light border border-green-border text-green text-xs md:text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="text-green">●</span>
            Respuesta en horario laboral
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight text-dark2">
            Empieza hoy.
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-mid">
            Consulta inicial sin costo. Cuéntanos tu situación y un asesor de
            MoBa te contactará para revisar tu caso.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-[2px] bg-border border border-border">
          <div className="lg:col-span-3 bg-white p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-dark2">
              Envíanos un mensaje
            </h3>

            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="nombre" className="block text-[13px] font-medium text-dark2 mb-1.5">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={onChange}
                  disabled={isLoading}
                  autoComplete="name"
                  className="w-full px-4 py-2.5 text-[14px] text-dark2 bg-white border border-border rounded-lg focus:outline-none focus:border-trust focus:ring-2 focus:ring-trust/15 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-[13px] font-medium text-dark2 mb-1.5">
                  WhatsApp / Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={onChange}
                  disabled={isLoading}
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9 +()-]{8,}"
                  className="w-full px-4 py-2.5 text-[14px] text-dark2 bg-white border border-border rounded-lg focus:outline-none focus:border-trust focus:ring-2 focus:ring-trust/15 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomListbox
                  label="Estado"
                  options={ESTADOS}
                  value={form.estado}
                  onChange={(value) => setForm((prev) => ({ ...prev, estado: value }))}
                  disabled={isLoading}
                  placeholder="Selecciona un estado"
                />

                <CustomListbox
                  label="Servicio"
                  options={SERVICIOS}
                  value={form.servicio}
                  onChange={(value) => setForm((prev) => ({ ...prev, servicio: value }))}
                  disabled={isLoading}
                  placeholder="Selecciona un servicio"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-[13px] font-medium text-dark2 mb-1.5">
                  Describe tu situación
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={onChange}
                  disabled={isLoading}
                  className="w-full px-4 py-2.5 text-[14px] text-dark2 bg-white border border-border rounded-lg focus:outline-none focus:border-trust focus:ring-2 focus:ring-trust/15 transition-colors disabled:opacity-50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center bg-trust hover:bg-trust-mid disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm md:text-base font-medium px-6 py-3 rounded-full transition-colors w-full sm:w-auto"
              >
                {isLoading ? 'Enviando...' : 'Enviar consulta'}
              </button>

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-4 rounded-lg border border-green-border bg-green-light px-4 py-3 text-[13px] text-green"
                >
                  Recibimos tu consulta. Un asesor de MoBa te contactará en
                  horario laboral para revisar tu caso.
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
                >
                  {errorMsg}
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-2 bg-bg p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-dark2">
              Contáctanos directo
            </h3>

            <div className="mt-6 space-y-5">
              <InfoItem icon={<PhoneIcon />}>
                <a href="https://wa.me/528181234567" className="hover:text-trust transition-colors">
                  81 XXXX XXXX
                </a>
                <div className="text-[12px] text-soft">WhatsApp · Tel.</div>
              </InfoItem>

              <InfoItem icon={<MailIcon />}>
                <a href="mailto:contacto@mobagestores.com.mx" className="hover:text-trust transition-colors">
                  contacto@mobagestores.com.mx
                </a>
              </InfoItem>

              <InfoItem icon={<PinIcon />}>
                Monterrey, Nuevo León, México
              </InfoItem>
            </div>

            <div className="mt-8 h-32 rounded-lg bg-border flex items-center justify-center">
              <span className="text-[12px] text-soft">
                Google Maps — Monterrey, NL
              </span>
            </div>

            <p className="mt-6 text-[12px] text-soft leading-relaxed whitespace-pre-line">
              {'Servicio a nivel nacional.\nNo es necesario viajar a Monterrey.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
