import React from 'react';

import css from './Comment.module.css'
import {Link,useNavigate} from "react-router-dom";


const Comment = ({comment}) => {

    const scrollToTop=()=>{
        window.scrollTo(0,0)
    }

    const functionNavigate=()=>{
        navigate(postId.toString())
    }

    const navigate = useNavigate()
    const{postId,id,name,email,body}=comment

    return (
        <div className={css.Comment}>
            <div>postId : {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
            <button onClick={()=>{functionNavigate();scrollToTop()}}>Show The Post</button>
            {/*<Link to={postId.toString()}>Post</Link>*/}
        </div>
    );
};

export {Comment};