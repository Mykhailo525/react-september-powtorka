import React from 'react';
import {useNavigate} from "react-router-dom";


import css from './Comment.module.css'


const Comment = ({comment}) => {
    const navigate = useNavigate()

    const{postId,id,name,email,body}=comment


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    const functionNavigate=()=>{
        navigate(postId.toString(),{state:comment})
    }

    return (
        <div className={css.Comment}>
            <div>postId : {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
            <button onClick={()=>{functionNavigate();scrollToTop()}}>Show The Post</button>
        </div>
    );
};

export {Comment};