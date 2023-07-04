/* eslint-disable react/prop-types */
import { useState } from "react"
import { PremioIndividualIcon } from "../../../assets";

export function MapPremios({ sortedData, tipoContenido, bgIndividualDefecto, bgIndividualOnClick }) {
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
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-white uppercase font-montserrat">{tipoContenido}</h4>
        <div className="flex flex-wrap items-center justify-center md:flex-no-wrap">
          {sortedData.map((item) => (
            <div
              key={item.idDoc}
              className={`w-full md:w-1/3 flex flex-col items-center justify-center p-4 m-4 rounded shadow-lg hover:shadow-xl transition-shadow ${
                expandedItem === item ? `${bgIndividualOnClick}` : `${bgIndividualDefecto}`
              }`}
            >
              <div className="text-center">
                <div className="p-3 mt-4 mb-10 text-white border rounded-full hover:bg-gray-500"
                style={{ cursor: "pointer", overflow: "hidden" }}
                onClick={() => handleItemClick(item)}
                >{<PremioIndividualIcon />}</div>
              </div>
              <div>
                <div className="text-sm font-bold text-center text-white uppercase font-montserrat">{item?.titulo}</div>
                {expandedItem === item && (
                  <div className="p-2 overflow-auto text-sm text-center text-white font-montserrat">{item?.descripcion}</div>
                )}
                <div className="text-sm font-bold text-center text-white uppercase font-montserrat"><div>{'-'}</div><div>{item?.year}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
