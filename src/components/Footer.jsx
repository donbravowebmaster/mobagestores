import { Link } from 'react-router-dom'

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.43Zm-8.46 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.24c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.45 9.86-9.92 9.86Z" />
  </svg>
)

export default function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '528181234567'

  return (
    <footer className="w-full bg-dark2 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 py-10 md:grid md:grid-cols-3 md:items-center md:gap-4">
          <div className="text-white/50 text-base font-semibold tracking-tight md:justify-self-start">
            MoBa Gestores
          </div>

          <nav className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-[13px] md:justify-center">
            <Link
              to="/aviso-de-privacidad"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Aviso de Privacidad
            </Link>
            <span className="text-white/20" aria-hidden="true">·</span>
            <Link
              to="/terminos-y-condiciones"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Términos y Condiciones
            </Link>
          </nav>

          <div className="flex items-center gap-4 md:justify-self-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-4">
          <p className="text-[11px] leading-relaxed text-white/50">
            MoBa Gestores es una firma de asesoría y gestión documental
            para trámites de transporte federal. No somos dependencia
            gubernamental ni despacho jurídico. Los tiempos de resolución
            dependen exclusivamente de la SICT.
          </p>
        </div>

        <div className="border-t border-white/10 py-4">
          <p className="text-[11px] text-white/40">
            © 2025 MoBa Gestores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
