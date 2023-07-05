import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Projects } from "../components/Projects"
import elena from '../assets/profile.jpg'


export function HomePage() {
  const { email, uid } = useContext(UserContext)

  return (
    
    <main className="p-12">
        <h1 className="text-5xl font-semibold text-stone-800 mb-4">Home</h1>
        <h2 className="text-xl text-stone-600 m-5">
          {uid && 'Bienvenid@, '}
          {email}
        </h2>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 text-right bg-slate-800 p-4">Sobre mí</h2>
          <div className="flex items-start mb-5">
            <div>
            <img className="object-contain w-96 m-5 float-right rounded-sm" src={elena} alt="profile"/>
              <p className="text-xl text-stone-600 m-5">Soy Elena, una apasionada desarrolladora web con experiencia en la creación de soluciones digitales innovadoras. Me encanta el mundo de la tecnología y la forma en que puede impactar nuestras vidas de maneras significativas. Siempre he tenido una inclinación hacia la resolución de problemas y encontrar soluciones creativas a través del código.</p>
              <p className="text-xl text-stone-600 m-5">Mi viaje en el desarrollo web comenzó hace varios años cuando descubrí mi pasión por la programación. Desde entonces, he estado inmersa en el aprendizaje continuo y en la adquisición de nuevas habilidades para mantenerme actualizada con las últimas tecnologías y tendencias del sector. Estoy constantemente explorando nuevas herramientas y frameworks para mejorar mi eficiencia y eficacia en el desarrollo de aplicaciones web.</p>
              <p className="text-xl text-stone-600 m-5">Además de mis habilidades técnicas, poseo excelentes habilidades de comunicación y resolución de problemas. Soy capaz de comprender las necesidades del cliente y traducirlas en soluciones técnicas efectivas. Me enorgullezco de mi capacidad para aprender rápidamente y adaptarme a nuevos entornos y proyectos.</p>
              <p className="text-xl text-stone-600 m-5">Estoy emocionada por seguir creciendo profesionalmente y enfrentar nuevos desafíos en el campo del desarrollo web. Mi objetivo es utilizar mis habilidades y conocimientos para hacer una diferencia positiva en el mundo digital y contribuir al éxito de los proyectos en los que participe.</p>
              <p className="text-xl text-stone-600 m-5">Si estás buscando a alguien apasionado, dedicado y orientado a resultados para unirse a tu equipo de desarrollo web, ¡estaré encantada de conocerte y discutir cómo puedo contribuir a tu empresa!</p>
              <p className="text-xl text-stone-600 m-5">No dudes en ponerte en contacto conmigo a través de los datos de contacto que se encuentran en mi currículum.<strong> ¡Espero tener la oportunidad de trabajar juntos y crear experiencias web excepcionales!</strong></p>
            </div>

          </div>
        </div>
      < Projects />
    </main>
  )
}
