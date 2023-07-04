export function IndicePortfolio() {
  return (
    <div className="flex flex-col justify-between p-5">
      <div className='p-4 rounded'>
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-gray-900 uppercase font-montserrat">ÍNDICE</h4>
        <div className="flex flex-col items-end justify-end gap-10">
        <a href="#sobre-mi" className="font-medium text-gray-900 font-montserrat">SOBRE MÍ | 01</a>
          <a href="#experiencias" className="font-medium text-gray-900 font-montserrat">EXPERIENCIA | 02</a>
          <a href="#formacion" className="font-medium text-gray-900 font-montserrat">FORMACIÓN | 03</a>
          <a href="#premios" className="font-medium text-gray-900 font-montserrat">PREMIOS | 04</a>
          <a href="#publicaciones" className="font-medium text-gray-900 font-montserrat">PUBLICACIONES | 05</a>
        </div>
      </div>
    </div>
  );
}
