import React, { useState, useEffect, useRef } from 'react'
import { Icon } from './Icons'

/* Reveal hook */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#por-que', label: 'Por qué MoBa' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <React.Fragment>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="mark"></span>MoBa
            <span className="sub">Gestores</span>
          </a>
          <div className="nav-links">
            {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          </div>
          <div className="nav-cta-wrap">
            <a href="#contacto" className="btn btn-primary btn-sm nav-cta">Iniciar trámite</a>
            <button className="nav-burger" aria-label="Menú" onClick={() => setOpen(true)}>
              <Icon.Menu />
            </button>
          </div>
        </div>
      </nav>
      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="mark"></span>MoBa<span className="sub">Gestores</span>
          </a>
          <button className="nav-burger" aria-label="Cerrar" onClick={() => setOpen(false)}>
            <Icon.Close />
          </button>
        </div>
        <div className="drawer-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className="drawer-link" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
        <div className="drawer-foot">
          <a href="#contacto" className="btn btn-primary" onClick={() => setOpen(false)} style={{ width: '100%' }}>Iniciar trámite</a>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero() {
  const ref = useReveal();
  return (
    <section id="top" className="hero" ref={ref}>
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-meta reveal">
              <span className="badge navy">
                <span className="dot"></span>
                <span>30+ años de experiencia</span>
              </span>
              <span className="sep">/</span>
              <span className="eyebrow-num">MTY · MX</span>
            </div>

            <h1 className="display-xl hero-h1 reveal" data-delay="1">
              <span className="accent">Placas federales</span><br />
              y permisos de doble<br />
              semirremolque,<br />
              <span className="accent-2">sin complicaciones.</span>
            </h1>

            <p className="hero-sub reveal" data-delay="2">
              Acompañamos a transportistas y empresas de carga en el cumplimiento
              de sus obligaciones ante la SICT. Sede en Monterrey, atención a todo México.
            </p>

            <div className="hero-ctas reveal" data-delay="3">
              <a href="#contacto" className="btn btn-primary">
                Iniciar consulta gratuita
                <span aria-hidden="true">→</span>
              </a>
              <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
            </div>

            <div className="hero-meta-line reveal" data-delay="4">
              <div className="hero-meta-item">
                <div className="num">30+</div>
                <div className="label">Años trayectoria</div>
              </div>
              <div className="hero-meta-item">
                <div className="num">100%</div>
                <div className="label">Pagas al concluir</div>
              </div>
              <div className="hero-meta-item">
                <div className="num">Nacional</div>
                <div className="label">Cobertura total</div>
              </div>
            </div>
          </div>

          <div className="reveal" data-delay="2">
            <div className="hero-visual">
              <div className="hv-top">
                <div className="hv-tag">Expediente · Activo</div>
                <div className="hv-id">N°·MOBA—2026</div>
              </div>
              <div className="hv-mid">
                <div className="num">30<span className="plus">+</span></div>
                <div className="caption-sm">
                  Años acompañando trámites de transporte federal
                  ante la SICT desde Monterrey.
                </div>
              </div>
              <div className="hv-bottom">
                <div className="hv-row"><span>Servicio</span><span className="v">Placas federales</span></div>
                <div className="hv-row"><span>Norma</span><span className="v">NOM-012-SCT-2-2017</span></div>
                <div className="hv-row"><span>Estatus</span><span className="v">Pago al concluir</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useReveal();
  const services = [
    {
      idx: '01 / 02',
      eyebrow: 'PLACAS FEDERALES',
      title: 'Asesoría y gestión documental para placas de carga',
      desc: 'Te orientamos en cada documento requerido por la SICT para dar de alta, baja o reponer tus placas federales.',
      items: [
        'Alta en el Padrón del Autotransporte Federal',
        'Placas, tarjeta de circulación y engomado',
        'Baja, canje o reposición de placas',
        'Cambio de propietario o modalidad',
        'Tracto camiones, unitarios y remolques',
      ],
      featured: true,
    },
    {
      idx: '02 / 02',
      eyebrow: 'DOBLE SEMIRREMOLQUE',
      title: 'Autorización Expresa para tractocamión articulado',
      desc: 'Asesoría especializada para la Autorización Expresa conforme a la NOM-012-SCT-2-2017.',
      items: [
        'Revisión de requisitos técnicos (GPS, ABS, gobernador)',
        'Expediente documental completo',
        'Seguimiento ante la DGAF',
        'Configuraciones T-S-R y T-S-S',
        'Validación NOM-012 previa al trámite',
      ],
      featured: false,
    },
  ];

  return (
    <section id="servicios" className="section" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: 64 }} className="reveal">
          <div className="divider-line"><span className="ln"></span><span>Servicios</span></div>
          <h2 className="display-lg" style={{ maxWidth: 800, textWrap: 'balance' }}>
            Especialización total. <span style={{ color: 'var(--ink-4)' }}>Nada de generalidades.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 540, marginTop: 20 }}>
            Dos servicios de alta complejidad normativa. Los únicos que hacemos.
          </p>
        </div>

        <div className="bento">
          {services.map((s, i) => (
            <div key={i} className={`bento-cell svc-cell reveal ${s.featured ? 'featured' : ''}`} data-delay={i + 1}>
              <div className="top">
                <span className="eyebrow">{s.eyebrow}</span>
                <span className="index">{s.idx}</span>
              </div>
              <h3 className="h-card">{s.title}</h3>
              <p className="body desc">{s.desc}</p>
              <ul>
                {s.items.map((it, k) => (
                  <li key={k}>
                    <span className="check"><Icon.Check size={12} /></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="more">
                <a href="#contacto" className="link-arrow">
                  Consultar este servicio <span className="arr">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useReveal();
  const steps = [
    { n: '01', title: 'Contacto inicial', text: 'Nos describes tu situación por WhatsApp o formulario. Sin costo, sin compromiso.' },
    { n: '02', title: 'Revisión documental', text: 'Te enviamos la lista exacta de documentos. Puedes mandar copias digitales desde cualquier estado.' },
    { n: '03', title: 'Presentación ante SICT', text: 'Nuestro equipo en Monterrey presenta el expediente ante la DGAF y te informa el avance.' },
    { n: '04', title: 'Entrega y pago', text: 'Cuando la SICT emite tu resolución, recibes tus documentos. Solo entonces se cobran honorarios.' },
  ];
  return (
    <section id="proceso" className="section process" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: 64 }} className="reveal">
          <div className="divider-line"><span className="ln"></span><span>Proceso</span></div>
          <h2 className="display-lg" style={{ maxWidth: 800, textWrap: 'balance' }}>
            Cuatro pasos. <span style={{ color: 'var(--ink-4)' }}>Cero traslados.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 540, marginTop: 20 }}>
            Tú nos das la información desde cualquier estado. Nosotros hacemos
            el trabajo presencial en Monterrey.
          </p>
        </div>

        <div className="timeline reveal">
          {steps.map((s) => (
            <div key={s.n} className="tl-step">
              <div className="num">{s.n}</div>
              <h4 className="h-label">{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="process-note reveal" data-delay="1">
          Los tiempos de resolución dependen exclusivamente de la SICT.
          MoBa garantiza que tu expediente esté correcto desde el primer intento.
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const ref = useReveal();
  return (
    <section className="trust-band" ref={ref}>
      <div className="container trust-inner">
        <div className="reveal" style={{ marginBottom: 8 }}>
          <span className="eyebrow" style={{ color: 'var(--navy-bright)' }}>Modelo de cobro</span>
        </div>
        <h2 className="display-lg trust-h2 reveal" data-delay="1" style={{ maxWidth: 880, margin: '12px auto 0' }}>
          La diferencia que importa: <span className="light">pagas cuando concluye.</span>
        </h2>
        <p className="trust-sub reveal" data-delay="2">
          Nuestros honorarios se cobran únicamente cuando la SICT emite tu resolución
          favorable. Sin anticipos. Sin riesgos.
        </p>
        <div className="trust-stats reveal" data-delay="3">
          <div className="trust-stat">
            <div className="num">30<span className="small">+</span></div>
            <div className="label">Años de experiencia</div>
          </div>
          <div className="trust-stat">
            <div className="num">$0</div>
            <div className="label">Anticipos requeridos</div>
          </div>
          <div className="trust-stat">
            <div className="num">2</div>
            <div className="label">Servicios. Solo esos.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyMoba() {
  const ref = useReveal();
  const cards = [
    { feat: true, big: 'MTY', title: 'Presencia física en Monterrey', text: 'Para clientes de otros estados, realizamos la presentación presencial ante el Centro SICT. Tu expediente nunca espera en una mensajería.' },
    { feat: true, big: '100%', title: 'Enfocados en federal', text: 'Solo transporte federal. Solo placas y doble semirremolque. Esa concentración es tu garantía.' },
    { feat: false, big: 'DGAF', title: 'Trato directo con la autoridad', text: 'Conocemos los criterios y al personal de la Dirección General de Autotransporte Federal. Anticipamos observaciones antes de que ocurran.' },
    { feat: false, big: '1×', title: 'Expediente correcto al primer intento', text: 'El error documental es la causa principal de retrasos. Nuestra revisión previa elimina rechazos y reingresos.' },
  ];
  return (
    <section id="por-que" className="section" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: 64 }} className="reveal">
          <div className="divider-line"><span className="ln"></span><span>Por qué MoBa</span></div>
          <h2 className="display-lg" style={{ maxWidth: 880, textWrap: 'balance' }}>
            Lo que ningún competidor <span style={{ color: 'var(--ink-4)' }}>puede replicar.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 540, marginTop: 20 }}>
            Experiencia, modelo de cobro y especialización que marcan una diferencia real.
          </p>
        </div>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div key={i} className={`why-card reveal ${c.feat ? 'feat' : ''}`} data-delay={(i % 4) + 1}>
              <div className="big">{c.big}</div>
              <h4 className="h-card">{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useReveal();
  const items = [
    { q: '¿Qué documentos necesito para placas federales?', a: 'RFC vigente, identificación oficial, comprobante de domicilio fiscal, factura del vehículo y permiso de autotransporte. Al contactarnos te enviamos la lista exacta.' },
    { q: '¿Cuánto tiempo tarda el trámite?', a: 'Los tiempos dependen de la SICT. Lo que MoBa garantiza es que tu expediente esté correcto desde el primer intento, evitando rechazos que retrasan el proceso.' },
    { q: 'Soy de otro estado, ¿pueden atenderme?', a: 'Sí. Revisamos tu documentación digital desde cualquier estado. La presentación ante la SICT en Monterrey la hacemos nosotros.' },
    { q: '¿Qué es la Autorización Expresa para doble semirremolque?', a: 'Es el permiso SICT para circular en configuración doblemente articulada conforme a la NOM-012-SCT-2-2017.' },
    { q: '¿Cuándo pago los honorarios de MoBa?', a: 'Solo al concluir exitosamente. Sin anticipos. El monto se cotiza al inicio y se formaliza en un documento de servicio.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq-section" ref={ref}>
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <div className="divider-line" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <span className="ln" style={{ background: 'rgba(255,255,255,0.2)' }}></span>
              <span>FAQ</span>
            </div>
            <h2 className="display-lg">Preguntas<br />frecuentes.</h2>
            <p className="faq-sub">Todo lo que necesitas saber antes de iniciar.</p>
          </div>
          <div className="faq-list reveal" data-delay="1">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{it.q}</span>
                    <span className="faq-icon">
                      {isOpen ? <Icon.Minus size={14} /> : <Icon.Plus size={14} />}
                    </span>
                  </button>
                  <div className="faq-a-wrap" style={{ maxHeight: isOpen ? '300px' : '0px' }}>
                    <p className="faq-a">{it.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', state: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.phone.trim()) errs.phone = true;
    if (!form.service) errs.service = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };
  const states = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Ciudad de México','Coahuila','Colima','Durango','Estado de México','Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'];

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-head reveal">
          <div className="left">
            <div className="divider-line"><span className="ln"></span><span>Contacto</span></div>
            <h2 className="display-lg" style={{ textWrap: 'balance' }}>
              Empieza hoy. <span style={{ color: 'var(--ink-4)' }}>Consulta inicial sin costo.</span>
            </h2>
          </div>
          <span className="badge">
            <span className="dot"></span>
            <span>Respuesta en horario laboral</span>
          </span>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap reveal" data-delay="1">
            <h3 className="h-card" style={{ marginBottom: 6 }}>Envíanos un mensaje</h3>
            <p className="body-sm" style={{ marginBottom: 24 }}>Te respondemos a la brevedad en horario laboral.</p>
            {sent ? (
              <div className="success">
                <div className="ic"><Icon.Check size={22} color="var(--green)" /></div>
                <h4 className="h-label" style={{ marginBottom: 6 }}>Mensaje enviado</h4>
                <p className="body-sm" style={{ maxWidth: 400 }}>
                  Te contactaremos en horario laboral. Si es urgente, escríbenos por WhatsApp directamente.
                </p>
                <button className="link-arrow" style={{ marginTop: 16 }} onClick={() => { setSent(false); setForm({ name:'',phone:'',state:'',service:'',message:'' }); }}>
                  Enviar otro mensaje <span className="arr">→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="field">
                  <label>Nombre completo</label>
                  <input className="input" value={form.name} onChange={update('name')} style={errors.name ? { borderColor: '#c53030' } : {}} />
                </div>
                <div className="field">
                  <label>WhatsApp / Teléfono</label>
                  <input type="tel" className="input" value={form.phone} onChange={update('phone')} style={errors.phone ? { borderColor: '#c53030' } : {}} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div className="field">
                    <label>Estado</label>
                    <select className="select" value={form.state} onChange={update('state')}>
                      <option value="">Selecciona…</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label>Servicio</label>
                    <select className="select" value={form.service} onChange={update('service')} style={errors.service ? { borderColor: '#c53030' } : {}}>
                      <option value="">Selecciona…</option>
                      <option value="placas">Placas federales</option>
                      <option value="doble">Doble semirremolque</option>
                      <option value="otro">No estoy seguro</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Describe tu situación</label>
                  <textarea className="textarea" rows={4} value={form.message} onChange={update('message')} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
                  Enviar consulta
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>

          <aside className="contact-info reveal" data-delay="2">
            <h3 className="h-card">Contáctanos<br />directo</h3>
            <div className="info-row">
              <span className="info-icon"><Icon.Phone size={18} /></span>
              <div>
                <div className="info-label">WhatsApp / Teléfono</div>
                <div className="info-value">81 XXXX XXXX</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Icon.Mail size={18} /></span>
              <div>
                <div className="info-label">Correo</div>
                <div className="info-value">contacto@mobagestores.com.mx</div>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Icon.Pin size={18} /></span>
              <div>
                <div className="info-label">Ubicación</div>
                <div className="info-value">Monterrey, Nuevo León</div>
              </div>
            </div>
            <div className="closing">
              Atención nacional<br />— no es necesario viajar.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-display">
          MoBa<span className="dim"> · Gestores</span>
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h5>MoBa Gestores</h5>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, maxWidth: 320 }}>
              Asesoría y gestión documental para trámites de transporte federal ante la SICT.
            </p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Placas federales</a></li>
              <li><a href="#servicios">Doble semirremolque</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><a href="#por-que">Por qué MoBa</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Aviso de Privacidad</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-disc">
          MoBa Gestores es una firma de asesoría y gestión documental para trámites de
          transporte federal. No somos dependencia gubernamental ni despacho jurídico.
          Los tiempos de resolución dependen exclusivamente de la SICT.
        </p>
        <div className="footer-bot">
          <span>© 2026 MoBa Gestores. Todos los derechos reservados.</span>
          <span>Monterrey · NL · MX</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a className="wa-float" href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <Icon.WhatsApp size={20} color="#fff" />
      <span className="wa-text">WhatsApp</span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <TrustBand />
        <WhyMoba />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
