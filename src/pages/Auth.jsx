import React from 'react'

import { Input } from '@mui/joy';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Users = [
    {
        id: 1,
        login: "xxrtemy",
        password: "Start1337",
    },
    {   
        id: 2,
        login: "Jhon",
        password: "Start7515",
    },
    {   
        id: 3,
        login: "Artemy",
        password: "Superl00t",
    },
    {   
        id: 4,
        login: "Max",
        password: "Hiremepl1s",
    },
    {
        id: 5,
        login: "Svete",
        password: "Power2281",
    },
    {   
        id: 6,
        login: "Elena",
        password: "Strong15",
    },
    {   
        id: 7,
        login: "Artem",
        password: "Duplovome2",
    },
]


const Auth = () => {
    let navigate = useNavigate();


    const onSubmit = (data) =>{
        // submit func and input data 
      }
  
    return (
    <div className='flex h-screen flex-col justify-center'>
        <div className=" flex flex-col items-center gap-8">
            <Input
                className='w-5/12'
                disabled={false}
                placeholder="Login"
                size="lg"
                variant="outlined"
            />
            <Input
                className='w-5/12'
                disabled={false}
                placeholder="Password"
                size="lg"
                variant="outlined"
            />
            <Button
                children="w-3/12"
                text="Submit"
                bgColor="bg-primary"
                textColor="text-white"
                handler={() => alert('Not ready yet')}/>
        </div>
    </div>
  )
}

export default Auth