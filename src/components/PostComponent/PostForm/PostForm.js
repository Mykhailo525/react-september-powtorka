import React from 'react';


import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../../validators";
import {postService} from "../../../services";

const PostForm = ({setPosts}) => {
    const{register,handleSubmit,reset,formState:{errors,isValid}}=useForm({mode:'all',resolver:joiResolver(postValidator)});

    const submit= async (post)=>{
        const {data}=await postService.create(post)
        setPosts(prev=>[...prev,data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'userId'} {...register('userId')}/>
            {errors.userId && <span>{errors.userId.message}</span>}
            <input type="text" placeholder={'title'} {...register('title')}/>
            {errors.title && <span>{errors.title.message}</span>}
            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button disabled={!isValid}>Save</button>
            <hr/>
        </form>
    );
};

export {PostForm};