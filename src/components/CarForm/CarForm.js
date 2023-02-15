import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })


    const {updateCar} = useSelector(state => state.cars)

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])


    const dispatch=useDispatch()

    const submit = async (data) => {
        if(updateCar){
            const {id}=updateCar
            dispatch(carActions.updateById(id,data))
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>

    );
};

export {CarForm};