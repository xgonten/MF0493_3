import { useEffect, useRef, useState } from 'react'
import EmailButton from './components/EmailButton'
// import TextTransition, { presets } from 'react-text-transition'

function Header() {
  const [texto, setTexto] = useState("Desarrollador Web Front-End")
  const transition = useRef()

  let bool = false
  const changeText = () => {
    if(bool){
      const span = transition.current
      span.className = "text-3xl text-slate-400 text-fade"
      setTimeout(() => {
        setTexto("Desarrollador Web Front-End")
        const span = transition.current
        span.className = "text-3xl text-slate-400 text-show"
      },1000)
      bool = false
    }
    else{
      const span = transition.current
      span.className = "text-3xl text-slate-400 text-fade"
      setTimeout(() => {
        setTexto("Desarrollador de Software Multiplataforma")
        const span = transition.current
        span.className = "text-3xl text-slate-400 text-show"
      },1000)
      bool=true
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(
      () => changeText(),
      7000,
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <>
    <div className="flex flex-col justify-center p-4 align-middle lg:flex-row ">
      {/* <div className="m-auto mt-2 mb-4 lg:w-2/6 lg:my-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div> */}
      <div className="flex flex-col items-center p-4 space-y-3 text-center border-2 rounded-lg lg:w-4/6 border-slate-700">
        <h1 className='text-5xl'>Julio Manuel Souto Baña</h1>
        <div className=''>
          <h2 className='text-3xl text-slate-400' ref={transition}>{texto}</h2>
        </div>
        <div className="flex items-center self-center space-x-4">
          <h3 className='text-xl'>Links:</h3>
          <div className='space-x-4'>
            <a aria-label="Linkedin Link" href="https://www.linkedin.com/in/juliomanuelsouto/" target='_blank' rel="noopener noreferrer"  className="text-xl fa-brands fa-linkedin"></a>
            <EmailButton />
            <a aria-label="Github Profile Link" href="https://github.com/Julio-Souto" target='_blank' rel="noopener noreferrer" className='text-xl fa-brands fa-github'></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header