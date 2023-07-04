import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'



export function MainTemplate () {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  )
}
