import React from 'react';

const Simpson = (props) => {
    let{simpson}=props
    return (
        <div>
            <div>name-{simpson.name}</div>
            <div>surname-{simpson.surname}</div>
            <img src={simpson.image} />
        </div>
    );
};

export {Simpson};