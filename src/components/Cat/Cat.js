import React from 'react';

const Cat = ({cat,dispatch}) => {
    return (
        <div>
            <div>{cat.id}</div>
            <div>{cat.name}</div>
            <button onClick={()=>dispatch({type:'DELETE_CAT_BY_ID',payload:cat.id})}>DELETE</button>
        </div>
    );
};

export {Cat};