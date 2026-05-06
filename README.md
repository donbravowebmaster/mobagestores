# MoBa Gestores — Sitio Web

Asesoría en gestión documental para trámites de transporte federal SICT. Placas federales y Autorización Expresa doble semirremolque.

## Stack

- React 18 + Vite 5
- Tailwind CSS v3
- React Router DOM v6
- EmailJS (contacto sin backend)
- Vercel (deployment)

## Setup Local

```bash
# 1. Clonar y entrar al proyecto
git clone https://github.com/donbravowebmaster/moba-gestores.git
cd moba-gestores

# 2. Instalar dependencias
npm install

# 3. Copiar variables de entorno
cp .env.example .env

# 4. Llenar .env con credenciales de EmailJS
# VITE_EMAILJS_SERVICE_ID
# VITE_EMAILJS_TEMPLATE_ID
# VITE_EMAILJS_PUBLIC_KEY
# VITE_WHATSAPP_NUMBER

# 5. Ejecutar servidor de desarrollo
npm run dev
```

Visita http://localhost:5173

## Build para Producción

```bash
npm run build
npm run preview  # Vista previa local de la build
```

## Deploy en Vercel

### Opción A: Desde la CLI

```bash
npm i -g vercel
vercel
```

Selecciona el proyecto y Vercel detectará automáticamente Vite.

### Opción B: Desde Vercel Dashboard

1. Conecta tu GitHub repo en [vercel.com](https://vercel.com)
2. Vercel detecta Vite automáticamente
3. Agrega variables de entorno en **Settings → Environment Variables**:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   VITE_WHATSAPP_NUMBER=528181234567
   ```
4. Deploy automático en cada push a `main`

## Estructura del Proyecto

```
moba-gestores/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── TrustBand.jsx
│   │   ├── WhyMoba.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── LegalLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AvisoPrivacidad.jsx
│   │   └── TerminosCondiciones.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
├── postcss.config.js
├── .env.example
├── .gitignore
└── README.md
```

## Variables de Entorno

Ver `.env.example`. Todas son requeridas para Vercel.

### EmailJS Setup

1. Crea cuenta en [emailjs.com](https://www.emailjs.com)
2. Crea un servicio (ej: Gmail)
3. Crea una template para el formulario
4. Copia IDs a `.env`

## Compliance

⚠️ CRÍTICO — Restricciones innegociables:

- **FAQ tiempos**: NUNCA días/semanas. Siempre "dependen de la SICT"
- **Paso 4 Proceso**: "Solo entonces cobran los honorarios de MoBa"
- **Copy**: Usar "asesoría" NO "tramitamos por ti"
- **Footer**: Incluir disclaimer exacto legal
- **Logos**: NO usar SICT, SCT ni logos gubernamentales
- **Tiempos de respuesta**: NO especificar horas de respuesta, solo "en horario laboral"

## Rutas

- `/` — Home (one-page)
- `/aviso-de-privacidad` — Aviso de Privacidad
- `/terminos-y-condiciones` — Términos y Condiciones

## Comandos

```bash
npm run dev       # Desarrollo
npm run build     # Build producción
npm run preview   # Preview local build
```

## Diseño

Inspirado en Apple.com con colores de confianza:

- **trust**: #0a3d6b (azul marino principal)
- **trust-light**: #e8f0fb (fondo destacado)
- **green**: #0d6b4a (éxito/confianza)
- **dark2**: #1d1d1f (textos principales)

Tipografía: Inter (300, 400, 500, 600) desde Google Fonts.

## SEO

- Meta tags: title, description, og:*
- Schema LocalBusiness JSON-LD en index.html
- robots.txt incluido

## Soporte

Contacta a: contacto@mobagestores.com.mx

---

© 2025 MoBa Gestores. Todos los derechos reservados.
