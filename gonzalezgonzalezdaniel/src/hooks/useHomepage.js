import { useEffect, useState } from "react"
import { getDocuments } from "../helpers/firebase/cloud-firestore"

export function useHomepage() {
  const [experiences, setExperiences] = useState([])
  const [formacion, setFormacion] = useState([])
  const [premios, setPremios] = useState([])
  const [publicaciones, setPublicaciones] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getDocuments('Experiencia')
    .then((datosExperiencia) => {
      if(!datosExperiencia.length) throw new Error('No hay datos de experiencia')
      setExperiences(datosExperiencia)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Formacion')
    .then((datosFormacion) => {
      if(!datosFormacion.length) throw new Error('No hay datos de formación')
      setFormacion(datosFormacion)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Premios')
    .then((datosPremios) => {
      if(!datosPremios.length) throw new Error('No hay datos de premios')
      setPremios(datosPremios)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  useEffect(() => {
    getDocuments('Publicaciones')
    .then((datosPublicaciones) => {
      if(!datosPublicaciones.length) throw new Error('No hay datos de publicaciones')
      setPublicaciones(datosPublicaciones)
    })
    .catch(setError)
    .finally(()=> setIsLoading(false))
  }, [])

  return {
    experiences,
    formacion,
    premios,
    publicaciones,
    error,
    isLoading
  }
}