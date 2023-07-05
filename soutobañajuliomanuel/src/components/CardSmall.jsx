
// eslint-disable-next-line react/prop-types
function CardSmall({image,text}) {
  return (
    <>
      <div className="flex items-center gap-3 p-2 rounded-lg shadow-lg bg-slate-800 w-60 max-h-20">
        <img className="self-center w-1/3 h-full" src={image} alt="Image Icon" />
        <span className="w-2/3 text-xl font-bold text-white">{text}</span>
      </div>
    </>
  )
}

export default CardSmall