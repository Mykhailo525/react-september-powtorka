import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import {Album} from "../Album/Album";
import style from './Albums.module.css'

const Albums = () => {
    const[albums,setAlbums]=useState([]);

    useEffect(()=>{albumsService.getAll().then(value => value.data).then(value => setAlbums([...value]))})
    return (
        <div className={style.Albums}>
            {albums.map((value,index)=><Album key={index+1} album={value}/>)}
        </div>
    );
};

export {Albums};