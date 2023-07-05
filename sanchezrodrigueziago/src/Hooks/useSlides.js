/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export function useSlides () {

  const banner = useRef()
  let slideIndex = 0;
  function ShowSlides() {
      let i;
      const slides = banner.current.children
      console.log(slides)
      for (i = 0; i < slides.length; i++) {
        slides[i].style["display"] = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style["display"] = "block";  
      setTimeout(ShowSlides, 5000);
  }

  useEffect(() => {
      ShowSlides()
  }, [])


  return banner
}