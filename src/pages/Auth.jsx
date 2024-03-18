import React from 'react'
import Login from '../components/Auth/Login'

import axios from 'axios'


const Auth = () => {
  const [data, setData] = React.useState([])
  
  React.useEffect(()=>{
    axios
    .get('https://652c0ae1d0d1df5273ef1252.mockapi.io/users')
    .then((res) => setData(res.data));
},[setData])
  
return(
    <div className="">
      <Login data={data}/>
    </div>
  )
}

export default Auth