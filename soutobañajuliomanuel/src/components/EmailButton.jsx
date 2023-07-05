import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
function EmailButton({footer=false}) {
  let name = footer ? " left-8" : ""
  return (
    <>
    <div className='relative inline-block group'>
      <a aria-label="Email Link" href="mailto: julio.souto.zas@gmail.com" className='text-xl fa-solid fa-envelope tooltip'
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText("julio.souto.zas@gmail.com");
        toast.success("Copiado al portapapeles")
      }}></a>
      <span className={"absolute p-2 m-4 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 bg-gray-600 rounded-md opacity-0 bottom-2 group-hover:opacity-100 left-1/2"+ name}>julio.souto.zas@gmail.com</span>
      <ToastContainer className="inline-block" position="bottom-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
    </>
  )
}

export default EmailButton