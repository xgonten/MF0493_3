import React from "react"

export function ContactForm () {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error))
  }
  return (
    <section id="contact" className="relative">
      <div className="container flex flex-wrap px-5 py-10 mx-auto sm:flex-nowrap">
        <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Bora-Bora,+Polinesia+Francesa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
          <div className="relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md">
            <div className="px-6 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                DIRECCIÓN
              </h2>
              <p className="mt-1 text-gray-600">
              F787+MW5, Route de Ceinture <br />
                Bora-Bora <br /> 
                Polinesia Francesa 
              </p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                CORREO ELECTRÓNICO
              </h2>
              <a className="leading-relaxed text-indigo-400">
                igillmagg@gmail.com
              </a>
              <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed text-indigo-400">+689 40 60 86 86</p>
            </div>
          </div>
        </div>
        <form
        name="contact"
        onSubmit={handleSubmit}
          className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <p className="mb-5 leading-relaxed">
            Si quieres información sobre alguno de mis servicios rellena este formulario y me pondré en contacto
            contigo lo antes posible.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-lg font-bold text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}