import { useRef } from 'react'
import { useAdd } from '../../hooks/useAdd';
import { EditarContenidoSkeleton } from '../../components/Skeletons/EditarContenidoSkeleton';

export function AddContent() {
  const tituloRef = useRef(null)
  const tipoContenidoRef = useRef(null)
  const { handleFileChange, handleSubmit, error, isLoading, handleNombreArchivo, nombreArchivo} = useAdd(tituloRef, tipoContenidoRef)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="p-4 mx-4 my-4 bg-gray-600 rounded shadow-lg sm:mx-0">
        <form className='flex flex-col gap-3 space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="tipo-contenido" className="block font-medium text-white font-montserrat">Tipo de contenido</label>
            <select ref={tipoContenidoRef} name="tipoContenido" id="tipo-contenido" className="p-2 border rounded">
              <option value="Experiencia">Experiencia</option>
              <option value="Formacion">Formación</option>
              <option value="Premios">Premios</option>
              <option value="Publicaciones">Publicaciones</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="titulo" className="block font-medium text-white font-montserrat">Título</label>
            <input ref={tituloRef} className="w-full p-2 border rounded" type="text" name="titulo" id="titulo" placeholder="Añadir título"/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="descripcion" className="block font-medium text-white font-montserrat">Descripción</label>
            <textarea className="p-2 border rounded resize-none" name="descripcion" id="descripcion" placeholder="Añadir descripción" rows="3" cols="33"></textarea>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="year" className="block font-medium text-white font-montserrat">Año</label>
            <input className="w-full p-2 border rounded resize-none" htmlFor="year" type="text" name="year" id="year" />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="file" className="block font-medium text-white font-montserrat">Archivo
            <input className="w-full p-2 mt-2 mb-2 text-sm font-medium text-gray-800 border rounded resize-none font-montserrat" type="text" name="nombreArchivo" value={nombreArchivo} placeholder="Nombre del archivo" onChange={handleNombreArchivo}/>
            <input className="w-full p-2 resize-none" htmlFor="file" type="file" name="file" id="file" onChange={handleFileChange}/>
            </label>
          </div>
          <button disabled={isLoading} className="text-white bg-gray-900 hover:text-white border hover:bg-gray-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat">Enviar</button>
          {error?.message && <p className="font-bold text-red-400 font-montserrat">{error.message}</p>}
          {isLoading && <EditarContenidoSkeleton/>}
        </form>
      </div>
    </div>
  )
}
