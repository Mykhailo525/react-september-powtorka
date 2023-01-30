import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";


import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'



const Comments = () => {
    const[comments,setComments]=useState([]);

    const {state}=useLocation()


    useEffect(()=>{commentsService.getAll().then(value => value.data).then(value => setComments([...value]))},[])
    return (
        <div>

            <div>
                {state &&
                    <div className={css.Wrapper}>
                        <h1>Selected Comment</h1>
                        <div>postId : {state.postId}</div>
                        <div>id : {state.id}</div>
                        <div>name : {state.name}</div>
                        <div>email : {state.email}</div>
                        <div>body : {state.body}</div>
                    </div>
                }
            </div>


            <h1>Comments</h1>
            <div className={css.Comments}>
                {comments.map((value, index) => <Comment key={index + 1} comment={value}/>)}
            </div>

        </div>
    );
};

export {Comments};