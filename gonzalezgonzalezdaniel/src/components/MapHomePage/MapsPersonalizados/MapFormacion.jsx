/* eslint-disable react/prop-types */
import { useState } from "react"

export function MapFormacion({ sortedData, tipoContenido, bgIndividualDefecto,bgIndividualOnClick }) {
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
      <div className={`p-4 rounded`}>
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-gray-900 uppercase font-montserrat">{tipoContenido}</h4>
        <div className="flex flex-col">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`hover:scale-105 flex flex-col items-start justify-center p-4 m-4 rounded hover:shadow-xl transition-shadow ${
                expandedItem === item ? `${bgIndividualOnClick}` : `${bgIndividualDefecto}`
              }`}
              style={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleItemClick(item)}>
                <div className="text-sm font-bold text-left text-gray-900 uppercase font-montserrat">{' | '} {item?.titulo} {' // '} {item?.year}</div>
                {expandedItem === item && (
                <div className="p-2 overflow-auto text-sm font-medium text-left text-gray-800 font-montserrat">{item?.descripcion}</div>)}
                {(item?.titulo ==='Divulgador científico') ? <div>Pasaaa</div> : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
