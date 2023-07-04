/* eslint-disable react/prop-types */
import { useState } from "react"

export function MapExperiencia({ sortedData, tipoContenido, bgIndividualDefecto,bgIndividualOnClick }) {
  const [expandedItem, setExpandedItem] = useState(null)

  const handleItemClick = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null) // Si se hace clic nuevamente en el mismo ítem, se colapsa
    } else {
      setExpandedItem(item)
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className='p-4 rounded'>
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-gray-900 uppercase font-montserrat">{tipoContenido}</h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`hover:scale-105 flex flex-col items-center justify-start p-4 m-4 rounded hover:shadow-xl transition-shadow sx:flex-row sm:w-full ${
                expandedItem === item ? `${bgIndividualOnClick}` : `${bgIndividualDefecto}`
              }`}
              style={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleItemClick(item)}>
                <div className="pt-3">                  
                  <div className="flex justify-center object-cover p-2 min-w-48"><img className="object-cover w-48 h-48 rounded-lg sm:w-48 sm:h-48" src={item?.url} alt='No hay imagen' /></div>
                  <div className="pt-5 text-sm font-bold text-center text-gray-900 uppercase font-montserrat">{item?.titulo}</div>
                  {expandedItem === item && (
                  <div className="p-2 overflow-auto text-sm font-medium text-center text-gray-800 font-montserrat">{item?.descripcion}</div>)}
                  <div className="text-sm font-bold text-center text-gray-900 uppercase font-montserrat"><div>{'-'}</div><div>{item?.year}</div></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
