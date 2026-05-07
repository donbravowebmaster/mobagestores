import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#por-que-moba', label: 'Por qué MoBa' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-border transition-all duration-300 ${
        scrolled ? 'py-1.5' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, '#inicio')}
          className="text-trust font-semibold text-2xl tracking-tight"
        >
          MoBa
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-mid hover:text-trust transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            onClick={(e) => handleNav(e, '#contacto')}
            className="inline-flex items-center bg-trust hover:bg-trust-mid text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Iniciar trámite
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-trust hover:bg-trust-light transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-2 pb-5 border-t border-border bg-white/95">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="block py-3 text-base text-dark2 hover:text-trust transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={(e) => handleNav(e, '#contacto')}
                className="block w-full text-center bg-trust hover:bg-trust-mid text-white text-sm font-medium px-5 py-3 rounded-full transition-colors"
              >
                Iniciar trámite
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
