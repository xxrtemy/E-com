import React from 'react'

import Nav from "../components/Nav/Nav.jsx"
import CartProduct from '../components/Products/CartProduct.jsx'
import Heading from '../components/ui/Heading.jsx'

const Cart = () => {
  return (
    <div className='h-screen bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-auto'>
      <Nav/>
      <Heading
        title="Cart"
      />
      <CartProduct/>
    </div>
  )
}

export default Cart