import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";
import {Car} from "../Car/Car";

const Cars = () => {

    const {cars}=useSelector(state => state.cars)

    const dispatch=useDispatch()

    useEffect(() => {
            dispatch(carActions.getAll())
        }, [])

    return (
        <div>
            {cars.map((car,index)=><Car key={index+1} car={car}/>)}
        </div>
    );
};

export {Cars};