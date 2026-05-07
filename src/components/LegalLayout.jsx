import { Link } from 'react-router-dom'

export default function LegalLayout({ title, children }) {
  return (
    <main className="bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <Link
          to="/"
          className="inline-block text-sm text-trust hover:text-trust-mid mb-8 transition-colors"
        >
          ← Inicio
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark2 mb-8">
          {title}
        </h1>
        <div className="prose prose-sm md:prose-base max-w-none text-mid leading-relaxed [&_h2]:text-dark2 [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:md:text-xl [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-dark2 [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-trust [&_a:hover]:text-trust-mid">
          {children}
        </div>
      </div>
    </main>
  )
}
