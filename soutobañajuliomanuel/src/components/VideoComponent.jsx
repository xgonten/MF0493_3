import Grid from "animated-grid-lines"

// eslint-disable-next-line react/prop-types
function VideoComponent({onClick,image="http://placekitten.com/500/500"}) {
  return (
    <>
      <div className="container relative max-w-sm rounded shadow-lg bg-slate-800 max-h-96 hover:cursor-grab" onClick={onClick}>
      <Grid className="absolute z-10 grid-animation" gridColor="rgba(0,0,0,0)" autoFocus />
        <div className="flex items-center justify-center overflow-hidden rounded-t h-1/2"> 
          <img className="min-w-full min-h-full " src={image} alt="Project Image"/>
        </div>
        <div className="px-6 py-4 h-1/2">
          <div className="mb-2 text-xl font-bold">{"El mejor vídeo de Internet"}</div>
          <p className="text-base text-gray-400">
            {"Simplemente el mejor vídeo de Internet"}
          </p>
        </div>
      </div>
    </>
  )
}

export default VideoComponent