import React from 'react';

const Dog = ({dog,dispatch}) => {
    return (
        <div>
            <div>{dog.id}</div>
            <div>{dog.name}</div>
            <button onClick={()=>dispatch({type:'DELETE_DOG_BY_ID',payload:dog.id})}>DELETE</button>
        </div>
    );
};

export {Dog};