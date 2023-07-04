import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import ContactPage from '../pages/ContactPage'
import '../index.css'

export function MainTemplate() {
  return (
    <div className='container'>
      <header className='bg-gradient-to-b from-indigo-300 to-sky-300 main-header'>
        <h1 className='text-4xl text-center'><strong>Portfolio de Jorge Puga</strong></h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='bg-gradient-to-b from-sky-300 to-indigo-300'>
        <ContactPage />
      </footer>
    </div>
  )
}
