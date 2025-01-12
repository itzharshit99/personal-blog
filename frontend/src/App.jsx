import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <nav>Navbar</nav>
      <div>
      {/* to render all children components */}
        <Outlet/> 
      </div>
      <footer>Footer</footer>
    </div>
    
    </>
  )
}

export default App