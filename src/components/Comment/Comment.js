import React from 'react';
import css from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const{postId,id,name,email,body}=comment
    return (
        <div className={css.Comment}>
            <div>postId : {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>email : {email}</div>
            <div>body : {body}</div>
            <Link to={postId.toString()}>Post</Link>
        </div>
    );
};

export {Comment};