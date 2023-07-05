import { useNavigate } from "react-router-dom"
import CardComponent from "../components/CardComponent"
import {android1, android2, android3, articlepreview1, articlepreview2, productpreview1, productpreview2, introcomponent1, introcomponent2, introsection, ratingcomponent1, ratingcomponent2, moviesapisearch1, moviesapisearch2, moviesapisearch3, jsregexp, musicdbapi1, musicdbapi2, giphyapi1, giphyapi2, giphyapi3, githubapi, catclicker, unity1, unity2, unity3, unity4, unity5, qrcomponent2, qrcomponent1, portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, android} from '../assets/images'
// import VideoComponent from "./components/VideoComponent"

function Body() {
  const navigate = useNavigate()
  return (
    <>
      <h2 className='mt-6 text-2xl font-bold text-center'>Proyectos</h2>
      <div className='flex justify-center my-4 mb-6'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} reactb={null} tailwindb={null} firebaseb={null} image={portfolio1} title="Portfolio Personal usando React" description="La descripción de esta misma página" web="https://julio-souto.github.io/Portfolio-React-Julio-Souto/" github="https://github.com/Julio-Souto/Portfolio-React" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
                navigate("/PaginaProyecto", {state: { title:"Portfolio Personal usando React", description:
                  `
                    <p>Portfolio personal creado con Javascript, React y Tailwind, hecho como primera toma de contacto con React Router y Firebase</p>
                  `,
                images:[portfolio1,portfolio2,portfolio3,portfolio4,portfolio5], web:"https://julio-souto.github.io/Portfolio-React-Julio-Souto/", github:"https://github.com/Julio-Souto/Portfolio-React" }
                })
             }
          }/>
          <CardComponent image={android} title="Reproductor de Música en Android" description="Aplicacion de Android que permite reproducir archivos locales de música y gestionar listas de reproducción" androidb={null} javab={null} sqliteb={null} 
          github="https://github.com/Julio-Souto/Reproductor-Android" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Reproductor de Música en Android", description:
                `
                  <p>La aplicación consiste en un reproductor de música que reproduce archivos existentes en el dispositivo y permite descargar canciones a partir de una URL. Todas las funcionalidades de la aplicación son:</p>
                  <ul>
                    <li>Reproducir canciones existentes en el dispositivo, en las carpetas especificadas por el usuario.</li>
                    <li>Reproducir canciones en orden aleatorio y en bucle.</li>
                    <li>Crear y editar listas de reproducción.</li>
                    <li>Buscar canciones ya existentes en la aplicación.</li>
                    <li>Mostrar listas de canciones ordenadas por título, artista, álbum y fecha.</li>
                    <li>Mostrar listas de canciones agrupadas por artista, álbum y fecha.</li>
                    <li>Editar la información guardada de las canciones.</li>
                    <li>Descargar canciones con una URL y reproducirlas.</li>
                  </ul>
                `,
               images:[android1,android2,android3], github:"https://github.com/Julio-Souto/Reproductor-Android" }
              })
             }
          }/>
          <CardComponent csharpb={null} unityb={null} sqliteb={null} image={unity1} title="Reproductor de música en Unity" description="Aplicacion de Unity que permite reproducir archivos locales de música y gestionar listas de reproducción" github="https://github.com/Julio-Souto/Reproductor-Unity" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Reproductor de música en Unity", description:
                `
                <p>La aplicación consiste en un reproductor de música que reproduce archivos existentes en el dispositivo y permite descargar canciones a partir de una URL. Todas las funcionalidades de la aplicación son:</p>
                <ul>
                    <li>Reproducir canciones existentes en el dispositivo, en las carpetas especificadas por el usuario.</li>
                    <li>Reproducir canciones en orden aleatorio y en bucle. </li>
                    <li>Crear y editar listas de reproducción.</li>
                    <li>Buscar canciones ya existentes en la aplicación.</li>
                    <li>Mostrar listas de canciones ordenadas por título, artista, álbum, fecha y duración.</li>
                    <li>Mostrar listas de canciones agrupadas por artista, álbum y fecha.</li>
                    <li>Editar la información guardada de las canciones.</li>
                    <li>Descargar canciones con una URL y reproducirlas.</li>
                    <li>Personalizar la aplicación a través de un panel de configuración. Las opciones de configuración existentes permiten: cambiar el color de panel entre 4 colores diferentes, añadir una imagen de fondo, cambiar la opacidad del panel principal y ajustar el volumen, el tono y el reverb del reproductor. </li>
                  </ul>
                <p>Alt+Enter para entrar o salir de pantalla completa en Windows.</p>
                `
                ,
               images:[unity1,unity2,unity3,unity4,unity5], github:"https://github.com/Julio-Souto/Reproductor-Unity" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} reactb={null} tailwindb={null} image={giphyapi1} title="Buscador de Gifs usando la API de Giphy" description="Buscador de Gifs adaptable y con paginación usando la API de Giphy" web="https://julio-souto.github.io/Giphy-React-Dist/" github="https://github.com/Julio-Souto/React-Giphy-project" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Buscador de Gifs usando la API de Giphy", description:
                `
                  <p>Buscador de Gifs adaptable y con paginación haciendo fetching de datos a la API de Giphy, usando HTML, CSS, Javascript, React y Tailwind</p>
                `,
               images:[giphyapi1,giphyapi2,giphyapi3], web:"https://julio-souto.github.io/Giphy-React-Dist/", github:"https://github.com/Julio-Souto/React-Giphy-project" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} image={musicdbapi1} title="Adivina el artista a partir de una Carátula" description="Pequeño minijuego de adivinar el artista dada la Carátula de un Álbum aleatoria usando TheMusicDB API" web="https://julio-souto.github.io/musidb-api-dist/" github="https://github.com/Julio-Souto/musicdb-api" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Adivina el artista a partir de una Carátula", description:
                `
                  <p>Pequeño minijuego de adivinar el artista dada la Carátula de un Álbum aleatoria haciendo fetching de datos a TheMusicDB API, usando HTML, CSS y Javascript puros</p>
                `,
               images:[musicdbapi1,musicdbapi2], web:"https://julio-souto.github.io/musidb-api-dist/", github:"https://github.com/Julio-Souto/musicdb-api" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} image={moviesapisearch2} title="Buscador de películas usando una API" description="Buscador de películas adaptable usando la OMDB API" web="https://julio-souto.github.io/-Movies-API-Search-Dist/" github="https://github.com/Julio-Souto/Movies-API-Search" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Buscador de películas usando una API", description:
                `
                  <p>Buscador de películas adaptable haciendo fetching de datos a la API de OMDB con paginación, usando HTML, CSS y Javascript puros</p>
                `,
               images:[moviesapisearch1,moviesapisearch2,moviesapisearch3], web:"https://julio-souto.github.io/-Movies-API-Search-Dist/", github:"https://github.com/Julio-Souto/Movies-API-Search" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} reactb={null} image={githubapi} title="Buscador de Usuarios usando la API de GitHub" description="Buscador simple de Usuarios usando la API de GitHub" web="https://julio-souto.github.io/GitHub-API-Dist/" github="https://github.com/Julio-Souto/Github-Api-React" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Buscador de Usuarios usando la API de GitHub", description:
                `
                  <p>Buscador simple de Usuarios que devuelve la imagen de perfil haciendo fetching de datos a la API de GitHub, usando HTML, CSS, Javascript y React</p>
                `,
               images:[githubapi], web:"https://julio-souto.github.io/GitHub-API-Dist/", github:"https://github.com/Julio-Souto/Github-Api-React" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} image={jsregexp} title="Validación de formularios con expresiones regulares" description="Validación de campos de un formulario usando expresiones regulares" web="https://julio-souto.github.io/Javascript-ExpresionesRegulares/" github="https://github.com/Julio-Souto/Javascript-ExpresionesRegulares" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Validación de formularios con expresiones regulares", description:
                `
                  <p>Página de prueba para la validación de formularios usando expresiones regulares y HTML, CSS y Javascript puros</p>
                `,
               images:[jsregexp], web:"https://julio-souto.github.io/Javascript-ExpresionesRegulares/", github:"https://github.com/Julio-Souto/Javascript-ExpresionesRegulares" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} image={catclicker} title="Clicker de Gatitos" description="Minijuego Clicker de Gatitos hecho como prueba de Javascript" web="https://julio-souto.github.io/Javascript-Ejercicios/" github="https://github.com/Julio-Souto/Javascript-Ejercicios" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente de Calificación", description:
                `
                  <p>Minijuego Clicker de Gatitos hecho como prueba de Javascript usando solo HTML, CSS y Javascript puros</p>
                `,
               images:[catclicker], web:"https://julio-souto.github.io/Javascript-Ejercicios/", github:"https://github.com/Julio-Souto/Javascript-Ejercicios" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} image={ratingcomponent1} title="Diseño de un Componente de Calificación" description="Vista previa del diseño de un Componente de Calificación adaptable" web="https://julio-souto.github.io/interactive-rating-component/" github="https://github.com/Julio-Souto/interactive-rating-component" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente de Calificación", description:
                `
                  <p>Vista previa del diseño de un Componente de Calificación adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML, CSS y Javascript puros</p>
                `,
               images:[ratingcomponent1,ratingcomponent2], web:"https://julio-souto.github.io/interactive-rating-component/", github:"https://github.com/Julio-Souto/interactive-rating-component" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={introcomponent1} title="Diseño de una Página de Registro" description="Vista previa del diseño de una Página de Registro adaptable" web="https://julio-souto.github.io/intro-component/" github="https://github.com/Julio-Souto/intro-component" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de una Página de Registro", description:
                `
                  <p>Vista previa del diseño de una Página de Registro adaptable hecha a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[introcomponent1,introcomponent2], web:"https://julio-souto.github.io/intro-component/", github:"https://github.com/Julio-Souto/intro-component" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={introsection} title="Diseño de una Página de Inicio" description="Vista previa del diseño de una Página de Inicio" web="https://julio-souto.github.io/intro-section/" github="https://github.com/Julio-Souto/intro-section" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de una Página de Inicio", description:
                `
                  <p>Vista previa del diseño de una Página de Inicio hecha a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[introsection], web:"https://julio-souto.github.io/intro-section/", github:"https://github.com/Julio-Souto/intro-section" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={productpreview1} title="Diseño de un Componente Producto" description="Vista previa del diseño de un Componente Producto adaptable" web="https://julio-souto.github.io/product-preview/" github="https://github.com/Julio-Souto/product-preview" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente Producto", description:
                `
                  <p>Vista previa del diseño de un Componente Producto adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[productpreview1,productpreview2], web:"https://julio-souto.github.io/product-preview/", github:"https://github.com/Julio-Souto/product-preview" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={articlepreview1} title="Diseño de un Componente Artículo" description="Vista previa del diseño de un Componente Artículo adaptable" web="https://julio-souto.github.io/article-preview/" github="https://github.com/Julio-Souto/article-preview" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente Artículo", description:
                `
                  <p>Vista previa del diseño de un Componente Artículo adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[articlepreview1,articlepreview2], web:"https://julio-souto.github.io/article-preview/", github:"https://github.com/Julio-Souto/article-preview" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={qrcomponent1} title="Diseño de un Componente QR" description="Vista previa del diseño de un Componente QR adaptable" web="https://julio-souto.github.io/julio-souto-qr/" github="https://github.com/Julio-Souto/julio-souto-qr" onClick={
            (e) => { 
              if(e.target.tagName!=="A")
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente QR", description:
                `
                  <p>Vista previa del diseño de un Componente QR adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[qrcomponent1,qrcomponent2], web:"https://julio-souto.github.io/julio-souto-qr/", github:"https://github.com/Julio-Souto/julio-souto-qr" }
              })
             }
          }/>
          {/* <VideoComponent onClick={() => {navigate("/PaginaVideo")}}/> */}
          {/* <CardComponent androidb={null} cssb={null} angularb={null} firebaseb={null} htmlb={null} javab={null} javascriptb={null} mysqlb={null} tailwindb={null} typescriptb={null} csharpb={null} unityb={null} sqliteb={null} reactb={null} phpb={null} /> */}
        </div>
      </div>
    </>
  )
}

export default Body