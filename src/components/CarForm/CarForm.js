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
            setValue('brand', updateCar.brand,{shouldValidate:true})
            setValue('price', updateCar.price,{shouldValidate:true})
            setValue('year', updateCar.year,{shouldValidate:true})
        }
    }, [updateCar])


    const dispatch=useDispatch()

    const submit = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    const update=async (car)=>{
        await dispatch(carActions.updateById({id:updateCar.id,car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(updateCar?update:submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Create'}</button>
        </form>

    );
};

export {CarForm};