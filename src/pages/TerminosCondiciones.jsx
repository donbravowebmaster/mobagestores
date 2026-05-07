import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LegalLayout from '../components/LegalLayout'

export default function TerminosCondiciones() {
  return (
    <>
      <Navbar />
      <LegalLayout title="Términos y Condiciones">
        <p className="text-soft text-sm">
          Última actualización: 2025
        </p>
        <p>
          Los presentes Términos y Condiciones regulan la relación entre MoBa
          Gestores (en adelante, &quot;MoBa&quot;) y el cliente que contrata sus
          servicios de asesoría y gestión documental para trámites de
          transporte federal. Al solicitar nuestros servicios, el cliente
          acepta estos Términos y Condiciones en su totalidad.
        </p>

        <h2>I. Naturaleza del servicio</h2>
        <p>
          MoBa Gestores es una firma privada de asesoría y gestión documental
          especializada en trámites del autotransporte federal. MoBa
          <strong> no es una dependencia gubernamental, no es un despacho jurídico</strong>
          {' '}y no tiene relación oficial con la Secretaría de Infraestructura,
          Comunicaciones y Transportes (SICT) ni con ninguna otra autoridad.
        </p>
        <p>
          El servicio consiste en acompañar al cliente en la integración del
          expediente y en la presentación documental ante la autoridad
          competente, conforme a la normativa vigente.
        </p>

        <h2>II. Alcance del servicio</h2>
        <p>El servicio incluye, según el caso contratado:</p>
        <ul>
          <li>Revisión y validación documental.</li>
          <li>Asesoría sobre los requisitos normativos aplicables.</li>
          <li>Integración del expediente.</li>
          <li>Presentación y seguimiento del trámite ante la SICT.</li>
        </ul>
        <p>
          Los tiempos de resolución del trámite dependen exclusivamente de la
          SICT y, en consecuencia, no pueden ser garantizados por MoBa. MoBa
          garantiza que el expediente será presentado completo y conforme a la
          normativa aplicable.
        </p>

        <h2>III. Modelo de cobro (pago diferido)</h2>
        <p>
          MoBa opera bajo un modelo de pago diferido. Los honorarios por los
          servicios de MoBa se cobran <strong>únicamente al concluir el trámite de manera exitosa</strong>,
          es decir, una vez que la SICT emita la resolución correspondiente.
        </p>
        <ul>
          <li>No se solicitan anticipos por concepto de honorarios de MoBa.</li>
          <li>El monto de los honorarios se cotiza al inicio del proceso y se formaliza por escrito.</li>
          <li>
            Lo anterior no incluye derechos, contribuciones u otros pagos que
            la autoridad pudiera requerir directamente del cliente, los cuales
            son ajenos a los honorarios de MoBa.
          </li>
        </ul>

        <h2>IV. Responsabilidades del cliente</h2>
        <p>El cliente se compromete a:</p>
        <ul>
          <li>Proporcionar documentación veraz, completa y vigente.</li>
          <li>Notificar oportunamente cualquier cambio relevante.</li>
          <li>Cubrir directamente los pagos oficiales requeridos por la autoridad.</li>
          <li>Liquidar los honorarios de MoBa al concluir el trámite.</li>
        </ul>
        <p>
          MoBa no se responsabiliza por retrasos, rechazos o resoluciones
          desfavorables derivados de información incorrecta, incompleta o no
          proporcionada por el cliente.
        </p>

        <h2>V. Limitación de responsabilidad</h2>
        <p>
          MoBa actúa como intermediario asesor en la gestión documental. La
          resolución del trámite es facultad exclusiva de la autoridad
          competente. En consecuencia, MoBa no garantiza un sentido específico
          de la resolución ni los plazos en los que la autoridad emita la
          misma.
        </p>
        <p>
          La responsabilidad de MoBa se limita, en todo caso, al monto de los
          honorarios efectivamente cobrados por el servicio en cuestión.
        </p>

        <h2>VI. Propiedad intelectual</h2>
        <p>
          Todos los contenidos del sitio web, incluyendo marca, logotipos,
          textos, materiales gráficos y formatos de trabajo, son propiedad de
          MoBa Gestores y se encuentran protegidos por la legislación aplicable
          en materia de propiedad intelectual. Queda prohibida su reproducción
          total o parcial sin autorización por escrito.
        </p>

        <h2>VII. Ley aplicable y jurisdicción</h2>
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes de los
          Estados Unidos Mexicanos. Para la interpretación y cumplimiento de
          los mismos, las partes se someten expresamente a la jurisdicción de
          los tribunales competentes de la ciudad de Monterrey, Nuevo León,
          México, renunciando a cualquier otro fuero que pudiera
          corresponderles por razón de su domicilio presente o futuro.
        </p>
      </LegalLayout>
      <Footer />
    </>
  )
}
