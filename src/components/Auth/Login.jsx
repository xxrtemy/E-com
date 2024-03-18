import React from 'react'

import { Input } from '@mui/joy';
import Button from '../ui/Button';
import Heading from '../ui/Heading'
import { useNavigate } from 'react-router-dom';
import { MdKey } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { useForm } from "react-hook-form"


const Login = (props) => {
    let navigate = useNavigate();
    const [visiblePass, setVisiblePass] = React.useState(false)
    
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
    } = useForm({
        mode: "all"
    });



    const onSubmit = (data) =>{
        props.data.some(obj => obj.login === data.login && obj.password === data.password) ? 
        (
          reset(),
          navigate('/')
        )
        : 
          alert('Неверно указан номер телефона или пароль');
      }


    return (
    <div className='flex h-screen flex-col justify-center sm:px-10 xl:px-96'>
        <div className="hero-bg-color overflow-hidden sm:py-10 sm:px-2 rounded-3xl xl:px-40 xl:py-36">
        <Heading
            title="Login"
        />
            <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center xl:gap-8 sm:gap-2">
                <Input
                    type="text"
                    className='form-input w-5/12 sm:w-10/12 sm:px-8 sm:text-sm xl:p-3 xl:text-2xl'
                    disabled={false}
                    placeholder={errors?.login ? errors.login.message : "Login"}
                    error={!!errors.login}
                    variant="outlined"
                    startDecorator={<IoMdPerson />}
                    {
                        ...register("login",{
                            required: "Login is required"
                        })
                    }
                />
                <Input
                    type={visiblePass ? 'text' : 'password'}
                    className='form-input w-5/12 sm:w-10/12 sm:px-8 sm:text-sm xl:p-3 xl:text-2xl'
                    disabled={false}
                    placeholder={errors?.password ? errors.password.message : "Password"}
                    variant="outlined"
                    startDecorator={<MdKey />}
                    endDecorator={<FaEye className={visiblePass ? 'cursor-pointer text-primary' : 'cursor-pointer'}  onMouseUp={() => setVisiblePass(false)} onMouseDown={() => setVisiblePass(true)} />}
                    error={!!errors.password}
                    {
                        ...register('password',{
                            required: "Password is required",
                            validate: value => value && value[0] === value[0].toUpperCase(),
                            minLength: { value: 5, message: "Пароль должен содержать минимум 5 символа" }
                        })
                    }
                />
                <Button
                    text="Sign in"
                    children="xl:px-14 xl:py-3 sm:px-2 sm:py-1 mb-4"
                    bgColor="bg-primary"
                    textColor="text-white"
                    disabled={!isValid}
                />
            </form>
        </div>
    </div>
  )
}

export default Login;