import { HeadHomePage } from "../components"
import { useHomepage } from "../hooks/useHomepage"
import { IndicePortfolio } from "./IndicePortfolio"
import { MapExperiencia, MapFormacion, MapPremios, MapPublicaciones } from "../components/MapHomePage/MapsPersonalizados"
import { SobreMi } from "./SobreMi"
import { HomePageSkeleton } from "../components/Skeletons/HomePageSkeleton"

export function HomePage() {
  const { experiences, formacion, premios, publicaciones, isLoading, error } = useHomepage()

  // Ordenar los elementos por el campo 'titulo' de forma ascendente
  const sortedDataExperiences = experiences.sort((a, b) => a.titulo.localeCompare(b.titulo))
  const sortedDataFormacion = formacion.sort((a, b) => a.titulo.localeCompare(b.titulo))
  const sortedDataPremios = premios.sort((a, b) => a.titulo.localeCompare(b.titulo))
  const sortedDataPublicaciones = publicaciones.sort((a, b) => a.titulo.localeCompare(b.titulo))

  return (
    <div>
      <HeadHomePage/>
      <div className="flex justify-center">{isLoading && <HomePageSkeleton />}</div>
      <IndicePortfolio/>
      {/* Mapeo de cada contenido añadido (vienen de components/MapHomePage/MapsPersonalizados) */}
      <div id='sobre-mi' className="p-5 pt-12 bg-gray-100"><SobreMi/></div>
      <div id="experiencias" className="p-5 pt-12 bg-gray-200" >
          <MapExperiencia bgIndividualOnClick={'bg-gray-100'} bgIndividualDefecto={'bg-gray-200'}
                          tipoContenido={'Experiencia'} sortedData={sortedDataExperiences}/>
      </div>

      <div id="formacion" className="p-5 pt-12 bg-gray-300">
        <MapFormacion bgIndividualOnClick={'bg-gray-200'} bgIndividualDefecto={'bg-gray-300'} 
                      tipoContenido={'Formacion'} sortedData={sortedDataFormacion}/>
      </div>

      <div id="premios" className="p-5 pt-12 bg-gray-700">
        <MapPremios bgIndividualOnClick={'bg-gray-600'} bgIndividualDefecto={'bg-gray-700'} bgContainer={'bg-gray-700'}
                    tipoContenido={'Premios'} sortedData={sortedDataPremios} />
      </div>

      <div id="publicaciones" className="p-5 pt-12 bg-gray-800">
        <MapPublicaciones 
                    bgIndividualOnClick={'bg-gray-600'} bgIndividualDefecto={'bg-gray-800'}
                    tipoContenido={'Publicaciones'} sortedData={sortedDataPublicaciones} />
      </div>
      {error && error.message}
    </div>
  )
}
  
  