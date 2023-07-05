import { useNavigate } from 'react-router-dom';
import { addDocument } from '../helpers/firebase/cloud-firestore';
import { useState } from 'react';

export function ExperienciaForm() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const insertData = async (data) => {
    setError(null);
    setIsLoading(true);
    try {
      if (!data.titulo) throw new Error('El campo título no puede estar vacío');
      await addDocument('miexperiencia', data);
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    insertData(data);
  };

  return (
    <>
      <h2 className='ml-8 font-bold text-white text-8xl rotar'>experiencia</h2>
      <div className='flex items-start justify-center h-screen mt-6'>
        <div className='max-w-[250%] px-4 py-8 bg-gray-100 rounded'>
          <form onSubmit={handleSubmit} className='grid place-items-center'>
            <div className='mb-4 campo'>
              <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='titulo'>
                Título
              </label>
              <input className='border' id='titulo' type='text' name='titulo' required />
            </div>
            <div className='mb-6 campo'>
              <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='descripcion'>
                Descripción
              </label>
              <textarea className='border' id='descripcion' type='text' name='descripcion' />
            </div>
            <button
              disabled={isLoading}
              className='px-4 py-2 font-bold text-white transition-all bg-gray-500 rounded hover:bg-gray-700 hover:filter hover:brightness-75'
            >
              Enviar
            </button>
            {error && <p>{error.message}</p>}
            {isLoading && 'Cargando............'}
          </form>
        </div>
      </div>
    </>
  );
}
