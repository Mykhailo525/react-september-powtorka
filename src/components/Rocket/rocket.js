import React from 'react';

const Rocket = ({rocket}) => {
    const{mission_name,launch_year,mission_patch_small}=rocket
    return (
        <div>
            <div>mission_name - {mission_name}</div>
            <div>launch_year - {launch_year}</div>
            <img src={rocket.links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Rocket};