import React from 'react'

import { Input } from '@mui/joy';
import Button from '../ui/Button';
import Heading from '../ui/Heading'
import { useNavigate } from 'react-router-dom';
import { MdKey } from "react-icons/md";


const Login = () => {
    let navigate = useNavigate();
    const [loginValue, setLoginValue] = React.useState('')
    const [passValue, setPassValue] = React.useState('')
    const [error,setError] = React.useState(false)



    const onSubmit = () =>{
        if(loginValue && passValue) {
            alert(loginValue + passValue)
            navigate('/');
        }else{
            alert('нет данных')
            setError(true)
        }
      }
  
    return (
    <div className='flex h-screen flex-col justify-center'>
        <Heading
        title="Login"
        />
        <div className=" flex flex-col items-center gap-8">
            <Input
                type="text"
                value={loginValue}
                onChange={(event) => setLoginValue(event.target.value)}
                className='w-5/12'
                disabled={false}
                placeholder="Login"
                size="lg"
                variant="outlined"
            />
            <Input
                type="password"
                value={passValue}
                error={error}
                onChange={(event) => setPassValue(event.target.value)}
                className='w-5/12'
                disabled={false}
                placeholder="Password"
                size="lg"
                variant="outlined"
                startDecorator={<MdKey />}
            />
            <Button
                children="w-3/12"
                text="Sign in"
                bgColor="bg-primary"
                textColor="text-white"
                handler={() => onSubmit()}
            />
        </div>
    </div>
  )
}

export default Login