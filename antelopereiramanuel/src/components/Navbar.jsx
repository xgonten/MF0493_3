import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import firebase from 'firebase/compat/app'; // Importar solo el módulo 'app'
import 'firebase/compat/auth'; // Importar el módulo 'auth' si necesitas autenticación
import LoginForm from './LoginForm';
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  const handleFirebaseLogin = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(authProvider)
      .then((result) => {
        // El usuario ha iniciado sesión exitosamente con Firebase
        const user = result.user;
        // Realiza acciones adicionales si es necesario
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión con Firebase
        const errorCode = error.code;
        const errorMessage = error.message;
        // Maneja el error de inicio de sesión con Firebase
      });
      ReactDOM.render(<LoginForm />, document.getElementById('login-form'));
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl  font-bold ">Manuel Antelo</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <AnchorLink href="#home">Inicio</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">Experiencia</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">Projectos</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/rapasinho" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/rapasinho/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/mantelop/react-portfolio-manuel"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
          <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold" onClick={handleFirebaseLogin}>
              Firebase
            </button>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
