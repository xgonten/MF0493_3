import EmailButton from "./components/EmailButton"

function Footer() {
  return (
    <>
      <div className="absolute bottom-0 flex justify-between w-full p-4 ">
        <div className='p-2 space-x-4 rounded-lg bg-slate-800'>
          <a aria-label="Linkedin Link" href="https://www.linkedin.com/in/juliomanuelsouto/" target='_blank' rel="noopener noreferrer"  className="text-xl fa-brands fa-linkedin"></a>
          <EmailButton footer={true} />
          <a aria-label="Github Profile Link" href="https://github.com/Julio-Souto" target='_blank' rel="noopener noreferrer" className='text-xl fa-brands fa-github'></a>
        </div>
        <div className="p-2 rounded-lg bg-slate-800">
          <p className="font-bold text-white">Julio Manuel Souto Baña</p>
        </div>
      </div>
    </>
  )
}

export default Footer