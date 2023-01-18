import React from 'react';

const Character = ({character}) => {
   const {id, name, status, species, image} = character;
    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <div>status {status}   species {species}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};