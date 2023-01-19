import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Rocket} from "../Rocket/rocket";

const Rockets = () => {
    const [rockets,setRockets]=useState([])

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setRockets([...value]))
    },[])



    return (
        <div>
            {rockets.filter(item=>item.launch_year!=2020).map((rocket,index)=><Rocket key={index+1} rocket={rocket}/>)}
        </div>
    );
};

export {Rockets};