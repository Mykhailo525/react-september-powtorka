import React, {useEffect, useState} from 'react';


import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'

const Comments = () => {
    const[comments,setComments]=useState([]);

    useEffect(()=>{commentsService.getAll().then(value => value.data).then(value => setComments([...value]))},[])
    return (
        <div className={css.Comments}>
            {comments.map((value,index)=><Comment key={index+1} comment={value}/>)}
        </div>
    );
};

export {Comments};