import React from 'react';
import Card from '../components/Card';
import { useCollection } from '../hooks/useCollection';

export function HomePage() {
  const { isLoading, error, data: experiences } = useCollection('experiences');

  return (
    <>
      {/* <h2 className='text-4xl'>Inicio</h2> */}
      <div className='grid grid-cols-1 gap-4 mx-4 mt-8 sm:grid-cols-2 md:grid-cols-3'>
        {isLoading && 'Cargando...'}
        {error && error.message}
        {experiences?.map(({ idDoc, titulo, descripcion }) => (
          <Card
            key={idDoc}
            title={titulo}
            description={descripcion}
            link={`https://www.example.com/${idDoc}`}
          />
        ))}
      </div>
    </>
  );
}
