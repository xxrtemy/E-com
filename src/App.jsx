import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage.jsx'
import Cart from './pages/Cart.jsx'
import Auth from './pages/Auth.jsx'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App