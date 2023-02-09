import React from 'react';
import {Dog} from "../Dog/Dog";

const Dogs = ({dogs,dispatch}) => {
    return (
        <div>
            <h2>Dogs</h2>
            {dogs.map((dog,index)=><Dog key={index+1} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {Dogs};