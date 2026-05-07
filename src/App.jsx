import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Site from './components/Site'
import InicioTramite from './pages/InicioTramite'
import AvisoPrivacidad from './pages/AvisoPrivacidad'
import TerminosCondiciones from './pages/TerminosCondiciones'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/inicio-tramite" element={<InicioTramite />} />
        <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
      </Routes>
    </BrowserRouter>
  )
}
