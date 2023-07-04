// import { useEffect, useState } from "react"
// import { getDocuments } from "../helpers/cloud-firestore"

export function HomePage() {


  return (
    <>
      <h2 className='text-4xl'></h2>
      <div className="flex items-center justify-center min-h-full p-20 bg-gray-200 min-w-screen">
        <div className="w-full px-5 py-5 mx-auto text-gray-800 rounded-lg shadow-lg bg-gradient-to-b from-orange-300 to-transparent">
          <div>
            <p className="px-5 font-serif text-center text-gray-800 text-7xl">"Solo existen dos días en el año en que no se puede hacer nada. Uno se llama ayer y otro mañana. Por lo tanto hoy es el día ideal para amar, crecer, <strong>hacer</strong> y, principalmente, vivir."<i>(<u>Dalai Lama</u>)</i></p>
          </div>
        </div>
      </div>
    </>
  )
}