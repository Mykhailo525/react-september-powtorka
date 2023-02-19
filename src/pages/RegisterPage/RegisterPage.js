import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useNavigate} from "react-router-dom";
import {userValidator} from "../../validators/userValidator";
import {joiResolver} from "@hookform/resolvers/joi";

const RegisterPage = () => {

    const{register,handleSubmit,formState:{errors,isValid}}=useForm({
        mode:'all',
        resolver:joiResolver(userValidator)
    })

    const navigate=useNavigate()
    const[error,setError]=useState(null)

    const registerUser = async(user) => {
        try {
        await userService.create(user)
            navigate('/login')
        }catch (e) {
            setError(e.response.data.detail)
        }
    };

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type={'text'} placeholder={'username'} {...register('username')}/>
                    {errors.username && <span>{errors.username.message}</span>}
                    <input type={'text'} placeholder={'password'} {...register('password')}/>
                    {errors.password && <span>{errors.password.message}</span>}
                    <button disabled={!isValid}>Register</button>
                </form>
            </div>

            {error && <div> {JSON.stringify(error)}</div>
            }

        </div>



    );
};

export {RegisterPage};