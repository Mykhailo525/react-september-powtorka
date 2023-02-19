import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState={
    cars:[],
    prev:null,
    next:null,
    errors:null,
    loading:null,
    updateCar:null
};

const getAll=createAsyncThunk(
    'carsSlice/getAll',
    async ({page},{rejectedWithValue})=>{
        try {
            const {data}=await carService.getAll(page)
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const create=createAsyncThunk(
    'carsSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll({page:1}))
        }catch (e) {
            return thunkAPI.rejectWithValue(e.return.data)
        }
    }
);

const deleteById=createAsyncThunk(
    'carsSlice/deleteById',
    async ({id},thunkAPI)=>{
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.return.data)
        }
    }
);


const updateById=createAsyncThunk(
    'carsSlice/updateById',
    async ({id,car},thunkAPI)=>{
        try {
            await carService.updateById(id,car)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.return.data)
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
                const{prev,next,items}=action.payload
                state.cars=items
                state.prev=prev
                state.next=next
                state.loading=false
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
    getAll,deleteById,create,setUpdateCar,updateById
}

export {
    carReducer,carActions
}