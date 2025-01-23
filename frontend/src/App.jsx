import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
const App = () => {
  return (
    <>
    <div className='bg-bgPrimary min-h-screen flex flex-col'>
      <Navbar/>
      <div className='flex-grow'>
      {/* to render all children components */}
        <Outlet/> 
      </div>
      <footer className='mt-auto'><Footer/></footer>
    </div>
    </>
  )
}

export default App