import { useEffect, useRef } from "react";

export function useDeleteMenu () {

    const delmenu = useRef()
    console.log(delmenu)

    function showDelMenu() {
        
        // Si encuentran la card en la que se clica el boton
        // entonces se mostrará el Menú de delete
        
    }

    useEffect(() => {
        showDelMenu()
    }, [])

    return delmenu
}