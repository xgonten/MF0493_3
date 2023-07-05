import React from 'react';
import Card from '../components/Card'


export function HomePage() {
  return (
    <>
      {/* <h2 className='text-4xl'>Inicio</h2> */}
      <div className='grid grid-cols-1 gap-4 mx-4 mt-8 sm:grid-cols-2 md:grid-cols-3'>
        <Card
          imageSrc='src/images/istockphoto-622064544-612x612.jpg'
          title='Tecnico audiovisual'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
          link='https://www.example.com'
        />
        <Card
          imageSrc='src/images/IMDB_recortado.jpg'
          title='Mi perfil de IMDB'
          description='Sonido. Dirección de fotografía y cámara. Arte.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
          link='https://www.imdb.com/name/nm6244375/?ref_=fn_al_nm_1'
        />
        <Card
          imageSrc='src/images/yo.jpg'
          title='Sobre mi'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
          link='https://www.example.com'
        />
        <Card
            imageSrc='src/images/books.jpg'
            title='Intereses'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
            link='https://www.imdb.com/name/nm6244375/?ref_=fn_al_nm_1'
          />
        <Card
          imageSrc='src/images/audio-editing-software.jpg'
          title='Edición/Postproducción de audio'
          description='Grabacion. Edicion. Postproduccion de audio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
          link='https://www.example.com'
        />
         <Card
          imageSrc='src/images/coding.jpg'
          title='Programación'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget scelerisque purus. Quisque at tempor libero. Aenean turpis ex, hendrerit non urna sit amet, lacinia viverra odio.'
          link='https://www.example.com'
        />
      </div>
    </>
  )
}


