import type { Metadata } from "next";
import { CONTACT_URL, Footer, Nav } from "@/components/site";

export const metadata: Metadata = {
  title: "Política de privacidad — Tramato",
  description: "Qué datos usa Tramato, dónde se guardan y qué controlás vos. La app no tiene servidores, cuentas ni analítica. Acá también explicamos cómo usamos el email de la lista de espera.",
};

export default function Privacidad() {
  return (
    <>
      <Nav />
      <main className="doc">
    <h1>Política de privacidad</h1>
    <p className="updated">Última actualización: 23 de octubre de 2026</p>

    <div className="summary">
      <p><strong>En resumen:</strong> la app Tramato funciona entera en tu iPhone. No tiene servidores, cuentas, analítica ni publicidad, y no recibimos ningún dato de la app. El único dato que recibimos es tu email, si te anotás en la lista de espera de este sitio.</p>
      <p>Los datos de salud se usan solo para mostrarte tus carreras. No se venden, no se comparten con terceros y no se usan para publicidad.</p>
    </div>

    <h2>Quién es responsable</h2>
    <p>Tramato es una app para iPhone desarrollada por Brian Pospos (Argentina). Si tenés preguntas sobre esta política, escribinos a través de la <a href={CONTACT_URL}>página de contacto</a>.</p>

    <h2>Qué datos usa la app</h2>
    <p>Con tu permiso, Tramato <strong>lee de Apple Salud</strong>:</p>
    <ul>
      <li>Entrenamientos de carrera (fecha, duración, distancia, calorías activas, pausas, interior o exterior y la app que los registró).</li>
      <li>La ruta GPS de cada entrenamiento.</li>
      <li>Frecuencia cardíaca, distancia caminando y corriendo, velocidad, potencia de carrera y pasos durante el entrenamiento.</li>
    </ul>
    <p>Si grabás una carrera con Tramato, la app usa tu <strong>ubicación</strong> solo mientras grabás (también con la pantalla bloqueada) para medir distancia y ritmo y dibujar la ruta. Al terminar, <strong>escribe en Apple Salud</strong> ese entrenamiento con su ruta y su distancia. Es lo único que escribe, y solo lo hace si aceptás el permiso. Si no lo aceptás, la carrera queda guardada solo dentro de Tramato, en tu iPhone, y la podés pasar a Salud más adelante desde su detalle.</p>
    <p>También guarda lo que vos cargás en la app: tu perfil opcional (objetivo, edad, FC máxima, días por semana), nombres, notas y sensación de cada carrera, tus zapatillas, tu objetivo de km, los entrenamientos que armás y los archivos GPX, TCX o FIT que importás.</p>

    <h2>Para qué se usan</h2>
    <p>Solo para que la app funcione: mostrarte tus carreras, calcular parciales, mejores marcas, carga y tendencias, darte avisos de voz durante la grabación, mostrar el widget y la pantalla bloqueada, y generar los archivos o textos que vos pidas.</p>
    <p>No usamos tus datos para publicidad, perfiles comerciales ni investigación. No los vendemos ni los compartimos con nadie.</p>

    <h2>Dónde se guardan</h2>
    <table>
      <thead><tr><th>Dato</th><th>Dónde queda</th></tr></thead>
      <tbody>
        <tr><td>Carreras, rutas y frecuencia cardíaca</td><td>En Apple Salud, administrado por Apple. Tramato guarda en el iPhone un resumen de cada carrera para que el listado cargue rápido.</td></tr>
        <tr><td>Notas, zapatillas, objetivo, perfil e importaciones</td><td>En el almacenamiento de la app en tu iPhone, protegido por el cifrado del dispositivo y excluido de la copia de iCloud.</td></tr>
        <tr><td>Carreras grabadas sin permiso de Salud</td><td>En el almacenamiento de la app en tu iPhone, con su ruta y distancia, hasta que las pases a Salud o las borres.</td></tr>
        <tr><td>Grabación en curso</td><td>Un borrador en el iPhone para no perder la carrera si la app se cierra. Se borra al guardarla o descartarla.</td></tr>
        <tr><td>Resumen para el widget</td><td>En un espacio compartido entre la app y su widget, dentro de tu iPhone.</td></tr>
      </tbody>
    </table>
    <p>La app no tiene servidores propios: nada de esto se envía a nosotros ni a terceros.</p>

    <h2>Cuándo salen datos del iPhone</h2>
    <p>Solo cuando vos lo hacés, y solo a donde vos elijas:</p>
    <ul>
      <li><strong>Exportar</strong> a CSV o Excel. Las coordenadas GPS se incluyen solo si activás esa opción.</li>
      <li><strong>Copiar para IA:</strong> copia al portapapeles un resumen sin coordenadas, lugares ni identificadores. Ese texto se borra del portapapeles a los 10 minutos. Si lo pegás en ChatGPT, Claude u otro servicio, se rige por la política de ese servicio.</li>
      <li><strong>Compartir una imagen</strong> de la carrera. Los estilos "Tarjeta" y "Transparente" muestran solo la forma del recorrido. El estilo "Con mapa" muestra las calles por donde corriste; la app lo avisa antes de compartir.</li>
      <li><strong>Copia de seguridad:</strong> un archivo con tus notas, zapatillas, objetivo e importaciones que guardás donde quieras.</li>
    </ul>

    <h2>Servicios de Apple</h2>
    <p>Para mostrar mapas, la app usa Apple Maps (MapKit). Al ver el mapa de una carrera o crear la imagen "Con mapa", el iPhone pide a Apple las imágenes de esa zona. Apple trata esos pedidos según su <a href="https://www.apple.com/legal/privacy/">política de privacidad</a>. La voz de los avisos se genera en el iPhone. Si instalás la beta desde TestFlight, Apple puede compartirnos los reportes de errores y los comentarios que envíes desde TestFlight.</p>

    <h2>Lo que controlás vos</h2>
    <ul>
      <li>Podés dar o quitar el acceso a Salud cuando quieras en <strong>Ajustes › Salud › Acceso a datos y dispositivos › Tramato</strong>, y el de ubicación en <strong>Ajustes › Tramato › Ubicación</strong>.</li>
      <li><strong>Ajustes › Borrar datos de la app</strong>, dentro de Tramato, elimina todo lo que guarda la app (caché, perfil, notas, zapatillas, objetivo e importaciones). Tus carreras siguen en Salud, y las que grabaste sin permiso de Salud siguen en Tramato: esas se borran una por una desde su detalle.</li>
      <li>Las carreras grabadas con Tramato se pueden borrar de Salud desde su detalle. Las de otras apps solo se pueden ocultar en Tramato: para borrarlas, usá la app que las registró o la app Salud.</li>
      <li>Al desinstalar la app se elimina todo lo que guardaba en el iPhone.</li>
    </ul>

    <h2 id="lista-de-espera">Lista de espera (este sitio)</h2>
    <p>Si te sumás a la lista de espera de este sitio, guardamos los datos que cargás en el formulario: tu <strong>email</strong>, si usás <strong>iPhone o Android</strong> y, si querés contarlo, <strong>con qué app registrás hoy tus carreras</strong>. También guardamos la fecha en que te anotaste.</p>
    <p>Los usamos solo para avisarte sobre la beta de Tramato y sobre la llegada de la versión de Android. No los vendemos, no los usamos para publicidad y no los compartimos con terceros, salvo con el proveedor que aloja la base de datos del sitio. Esto es independiente de la app: la app no envía datos a la lista.</p>
    <p>Si querés que borremos tu email de la lista, escribinos a través de la <a href={CONTACT_URL}>página de contacto</a>.</p>

    <h2>Menores</h2>
    <p>Tramato no está dirigida a menores de 13 años y no recopila datos de nadie: todo queda en el dispositivo de quien la usa.</p>

    <h2>Cambios en esta política</h2>
    <p>Si cambiamos cómo la app usa los datos, vamos a actualizar esta página y la fecha de arriba antes de publicar esa versión de la app.</p>
  </main>
      <Footer />
    </>
  );
}
