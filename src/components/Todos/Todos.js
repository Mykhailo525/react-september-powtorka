import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'

const Todos = () => {

    const[todos,setTodos]=useState([]);

    useEffect(()=>{todosService.getAll().then(value => value.data).then(value => setTodos([...value]))},[])

    return (
        <div className={css.Todos}>
            {todos.map((value,index)=><Todo key={index+1} todo={value}/>)}
        </div>
    );
};

export {Todos};