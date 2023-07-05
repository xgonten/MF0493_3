import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, npm, rest } from '../assets/icons'
import CardSmall from '../components/CardSmall'

function Knowledge() {
  return (
    <>
      <div>
        <h2 className="mt-6 text-2xl font-bold text-center">Perfil</h2>
        <div className='w-9/12 py-4 mx-auto space-y-4'>
          <p>Graduado en Desarrollo de Aplicaciones Multiplataforma, con formación académica focalizada en el desarrollo de Software con Java, C#, SQL y herramientas de Programación Web utilizando plataformas como Visual Studio, Intellij y Eclipse.</p>

          <p>Siempre afronto los nuevos retos con curiosidad y creatividad, buscando nuevas formas de resolver problemas para descubrir la más óptima y eficiente y aprender todo lo posible durante el proceso.</p>

          <p>Actualmente me encuentro estudiando Desarrollo de Aplicaciones con Tecnologías Web especializándome en el sector como Desarrollador Web Full Stack o Front-End.</p>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-center">Conocimientos</h2>
        <div className='flex justify-center mt-4 mb-4'>
          <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CardSmall image={html} text="HTML" />
            <CardSmall image={css} text="CSS" />
            <CardSmall image={javascript} text="JavaScript" />
            <CardSmall image={rest} text="Rest API" />
            <CardSmall image={react} text="React" />
            <CardSmall image={tailwind} text="TailwindCSS" />
            <CardSmall image={php} text="PHP" />
            <CardSmall image={mysql} text="MySQL" />
            <CardSmall image={firebase} text="Firebase" />
            {/* <CardSmall image={typescript} text="TypeScrypt" /> */}
            <CardSmall image={angular} text="Angular" />
            <CardSmall image={npm} text="NPM" />
            <CardSmall image={java} text="Java" />
            <CardSmall image={android} text="Android" />
            <CardSmall image={sqlite} text="SQLite" />
            <CardSmall image={csharp} text="C#" />
            <CardSmall image={unity} text="Unity" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Knowledge