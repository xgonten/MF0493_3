import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function MainTemplate() {

  return (
    <>
      <header>
        <div className='header-content'>
          <h1 className='flex justify-center'>Portfolio Project</h1>
          <nav className='nav-bar'>
            <NavBar />
          </nav>
        </div>
      </header>

      <main className='app-container'>
        <Outlet />
      </main>

      <footer>
        <div>
          <a href="https://dioscrom.wordpress.com/">Mar & Co </a>
          <span>&copy; 2023 PortfolioProxecto</span>
        </div>
        <div>
          <span>Powered by </span>
          <a href="https://dioscrom.wordpress.com/">Mar & Co</a>
        </div>
      </footer>
    </>
  )
}

