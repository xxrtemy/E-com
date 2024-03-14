import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'


const Auth = () => {
  <div className="">
    <Route path='/login' element={<Login/>} />
    <Route path='/registration' element={<Registration/>}/>
  </div>
}

export default Auth