import React from 'react';
import style from './Album.module.css'

const Album = ({album}) => {
    const{userId,id,title}=album
    return (
        <div className={style.Album}>
            <div>userId : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
        </div>
    );
};

export {Album};