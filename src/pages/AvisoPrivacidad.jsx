import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LegalLayout from '../components/LegalLayout'

export default function AvisoPrivacidad() {
  return (
    <>
      <Navbar />
      <LegalLayout title="Aviso de Privacidad">
        <p className="text-soft text-sm">
          Última actualización: 2025
        </p>
        <p>
          En cumplimiento con lo establecido por la Ley Federal de Protección de
          Datos Personales en Posesión de los Particulares (LFPDPPP), su
          Reglamento y los Lineamientos del Aviso de Privacidad, MoBa Gestores
          pone a disposición del titular el presente Aviso de Privacidad.
        </p>

        <h2>I. Identidad y domicilio del responsable</h2>
        <p>
          MoBa Gestores (en adelante, &quot;MoBa&quot;), con domicilio en Monterrey,
          Nuevo León, México, es responsable del tratamiento de los datos
          personales que recabe del titular. Para cualquier asunto relacionado
          con este Aviso, puede contactarnos al correo electrónico
          contacto@mobagestores.com.mx.
        </p>

        <h2>II. Datos personales que recabamos</h2>
        <p>
          Para las finalidades descritas en este Aviso, MoBa puede recabar los
          siguientes datos personales del titular:
        </p>
        <ul>
          <li>Datos de identificación: nombre completo, RFC, identificación oficial.</li>
          <li>Datos de contacto: teléfono, WhatsApp, correo electrónico, estado de residencia.</li>
          <li>Datos relacionados con el trámite: documentación vehicular, comprobantes de domicilio fiscal y demás documentos requeridos por la SICT.</li>
        </ul>
        <p>
          MoBa no recaba datos personales sensibles ni datos patrimoniales o
          financieros más allá de los estrictamente necesarios para los fines
          descritos.
        </p>

        <h2>III. Finalidades del tratamiento</h2>
        <p>Los datos personales serán utilizados para las siguientes finalidades primarias:</p>
        <ul>
          <li>Brindar asesoría y gestión documental para trámites de transporte federal.</li>
          <li>Integrar y dar seguimiento al expediente del titular ante la SICT.</li>
          <li>Establecer comunicación con el titular respecto al estatus del trámite.</li>
          <li>Emisión de comprobantes fiscales, en su caso.</li>
        </ul>
        <p>De manera secundaria, los datos podrán ser tratados para:</p>
        <ul>
          <li>Envío de información sobre actualizaciones normativas relevantes.</li>
          <li>Contacto para mejorar la calidad del servicio.</li>
        </ul>
        <p>
          El titular puede manifestar su negativa para el tratamiento de sus
          datos personales para finalidades secundarias enviando un correo a
          contacto@mobagestores.com.mx.
        </p>

        <h2>IV. Transferencia de datos personales</h2>
        <p>
          MoBa no transfiere datos personales a terceros sin el consentimiento
          del titular, salvo en los supuestos previstos por el artículo 37 de la
          LFPDPPP. Los datos podrán ser puestos a disposición de la Secretaría
          de Infraestructura, Comunicaciones y Transportes (SICT) y demás
          autoridades competentes, exclusivamente cuando ello sea necesario para
          la realización del trámite contratado.
        </p>

        <h2>V. Derechos ARCO y mecanismo para ejercerlos</h2>
        <p>
          El titular tiene derecho a Acceder, Rectificar, Cancelar u Oponerse
          (Derechos ARCO) al tratamiento de sus datos personales. Para
          ejercerlos, deberá enviar una solicitud al correo
          contacto@mobagestores.com.mx incluyendo:
        </p>
        <ul>
          <li>Nombre del titular y medio para recibir respuesta.</li>
          <li>Documento que acredite su identidad.</li>
          <li>Descripción clara de los datos respecto de los que se ejerce el derecho.</li>
          <li>Cualquier otro elemento que facilite la localización de los datos.</li>
        </ul>
        <p>
          MoBa dará respuesta en los plazos establecidos por la LFPDPPP.
        </p>

        <h2>VI. Revocación del consentimiento</h2>
        <p>
          El titular puede revocar en cualquier momento el consentimiento
          otorgado para el tratamiento de sus datos personales, mediante
          solicitud enviada al correo contacto@mobagestores.com.mx, con las
          consideraciones aplicables a un trámite en curso.
        </p>

        <h2>VII. Cookies y tecnologías de seguimiento</h2>
        <p>
          El sitio web de MoBa puede utilizar cookies y tecnologías similares
          con la finalidad de mejorar la experiencia del usuario y obtener
          información estadística sobre el uso del sitio. El titular puede
          deshabilitar estas tecnologías desde la configuración de su navegador.
        </p>

        <h2>VIII. Medidas de seguridad</h2>
        <p>
          MoBa implementa medidas de seguridad administrativas, técnicas y
          físicas razonables para proteger los datos personales del titular
          contra daño, pérdida, alteración, destrucción o uso, acceso o
          tratamiento no autorizados.
        </p>

        <h2>IX. Plazo de conservación de datos</h2>
        <p>
          Los datos personales serán conservados por el tiempo necesario para
          cumplir las finalidades descritas en este Aviso y las obligaciones
          legales aplicables, principalmente fiscales y administrativas, tras
          lo cual se procederá a su cancelación conforme a la normativa
          aplicable.
        </p>

        <h2>X. Modificaciones al Aviso</h2>
        <p>
          MoBa se reserva el derecho de modificar el presente Aviso de
          Privacidad en cualquier momento. Las actualizaciones se publicarán en
          este mismo sitio web, indicando la fecha de la última modificación.
        </p>

        <h2>XI. Autoridad competente (INAI)</h2>
        <p>
          En caso de considerar que su derecho a la protección de datos
          personales ha sido vulnerado, el titular podrá acudir al Instituto
          Nacional de Transparencia, Acceso a la Información y Protección de
          Datos Personales (INAI), www.inai.org.mx.
        </p>

        <h2>XII. Consentimiento</h2>
        <p>
          Al proporcionar sus datos personales a MoBa, ya sea por medio del
          formulario de contacto, correo electrónico, WhatsApp o cualquier otro
          canal, el titular reconoce haber leído y comprendido el presente
          Aviso de Privacidad y otorga su consentimiento para el tratamiento de
          sus datos personales conforme a las finalidades aquí descritas.
        </p>
      </LegalLayout>
      <Footer />
    </>
  )
}
