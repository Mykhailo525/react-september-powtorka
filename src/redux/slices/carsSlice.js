import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services/carService";

let initialState={
    cars:[],
    errors:null,
    loading:null,
    updateCar:null
};

const getAll=createAsyncThunk(
    'carsSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try {
            const {data}=await carService.getAll()
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const updateById=createAsyncThunk(
    'carsSlice/updateById',
    async ({id,data},{rejectedWithValue})=>{
        try {
            const {carData}=await carService.updateById(id,data)
            return carData
        }catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);

const create=createAsyncThunk(
    'carsSlice/create',
    async ({newCar},{rejectedWithValue})=>{
        try {
            const {data}=await carService.create(newCar)
            return data
        }catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);

const deleteById=createAsyncThunk(
    'carsSlice/deleteById',
    async ({id},{rejectedWithValue})=>{
        try {
            const {data}=await carService.deleteById(id)
            return data
        }catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);


const carsSlice=createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
       setUpdateCar:(state, action)=>{
           state.updateCar=action.payload
       }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.loading=false
                state.cars=action.payload
            })
            .addCase(getAll.pending,(state)=>{
                state.loading=true
            })
            .addCase(getAll.rejected,(state, action)=>{
                state.loading=false
                state.errors=action.payload
            })
})

const {reducer:carReducer,actions:{setUpdateCar}}=carsSlice

const carActions={
    getAll,deleteById,updateById,create,setUpdateCar
}

export {
    carReducer,carActions
}