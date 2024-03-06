import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Cart from './pages/Cart.jsx'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App