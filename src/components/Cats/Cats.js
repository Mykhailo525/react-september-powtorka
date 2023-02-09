import React from 'react';
import {Cat} from "../Cat/Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            <h2>Cats</h2>
            {cats.map((cat,index)=><Cat key={index+1} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};