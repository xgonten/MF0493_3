import { useRef, useState } from "react"
import { useLocation, Navigate } from "react-router-dom"

function ProjectPage() {
  const [image, setImage] = useState("")
  const { state } = useLocation()
  const imageRef = useRef()
  
  if(!state)
    return <Navigate replace to="/" />
  
  const { title="",description=<div></div>,images=[], github = "", web = "" } = state

  const handleImage = (image) => {
    setImage(image)
    const display = imageRef.current
    display.style.display = "block"
  }
  const hideImage = () => {
    const display = imageRef.current
    display.style.display = "none"
  }
  return (
    <>
      <div className="container flex flex-col p-8 mx-auto mb-4 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-2xl font-bold underline">{title}</h2>
            <div className='mr-12 space-x-4'>
              <span className="text-xl">Links: </span>
              {web == "" ? null : <a aria-label="Live Website Link" href={web} className='text-xl fa fa-globe' target="_blank" rel="noopener noreferrer"></a>}
              {github == "" ? null : <a aria-label="Github Repository Link" href={github} className='text-xl fa-brands fa-github' target="_blank" rel="noopener noreferrer"></a>}
            </div>
          </div>
          <div className="container space-y-4" dangerouslySetInnerHTML={{__html:description}}></div>
        </div>
        <div className="flex px-12 h-96">
          <div className="flex justify-between gap-2 overflow-auto">
            {images.map((image, index) => 
              <img className="max-w-3xl mx-auto " key={index} src={image} alt={"Project Image "+image} onClick={() => handleImage(image)}/>
            )}
          </div>
        </div>
      </div>
      <div ref={imageRef} className="modal">
        <div onClick={hideImage} className="modal-content">
          <img src={image} alt={"Project Image "+image} />
        </div>
      </div>

    </>
  )
}

export default ProjectPage