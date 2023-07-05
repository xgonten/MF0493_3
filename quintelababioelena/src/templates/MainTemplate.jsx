import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function MainTemplate() {
  return (
  <>
    <header className='bg-black text-white p-9 flex justify-between items-center'>
      <h1 className='text-3xl'>Portfolio de Elena Quintela</h1>
      <NavBar />
    </header>
    <main className='bg-stone-200 h-full'>
      <Outlet />
    </main>
  </>
  )
}

export default MainTemplate

