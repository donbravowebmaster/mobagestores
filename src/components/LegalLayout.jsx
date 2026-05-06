import { Link } from 'react-router-dom'

export default function LegalLayout({ title, children }) {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <Link to="/" className="text-trust hover:text-trust-mid mb-4 block">← Inicio</Link>
      <h1 className="text-4xl font-semibold mb-8">{title}</h1>
      <div className="prose">{children}</div>
    </main>
  )
}
