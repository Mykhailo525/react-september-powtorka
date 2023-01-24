import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../../services";

const UserForm = ({setUsers}) => {
    const{register,handleSubmit,reset,formState:{errors,isValid}}=useForm({mode:'all'});

    const submit= async (user)=> {
        const {data} = await userService.create(user);
        setUsers(prev=>[...prev,data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name',{required: {value:true, message:'Empty'}})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username',{required: {value:true, message:'Empty'}})}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email',{required: {value:true, message:'Empty'}})}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {UserForm};