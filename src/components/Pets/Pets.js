import React, {useReducer, useRef} from 'react';
import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";
import css from './Pets.module.css'

const Pets = () => {

    const reducer = (state,action) => {
        switch (action.type){
            case'ADDDOG':
                const dogSlice=state.dogs.slice(-1);
                const dogId=dogSlice.length?dogSlice[0].id+1:0
                return{...state,dogs: [...state.dogs,{id:dogId,name:action.payload}]}
            case'ADDCAT':
                const catSlice=state.cats.slice(-1);
                const catId=catSlice.length?catSlice[0].id+1:0
                return{...state,cats: [...state.cats,{id:catId,name:action.payload}]}
            case'DELETE_DOG_BY_ID':
                const dogIndex= state.dogs.findIndex(value=>value.id ===action.payload)
                state.dogs.splice(dogIndex,1)
                return {...state}
            case'DELETE_CAT_BY_ID':
                const catIndex= state.cats.findIndex(value=>value.id ===action.payload)
                state.cats.splice(catIndex,1)
                return {...state}
        }


        }


    const initialValue = () => (
        {cats: [], dogs:[]}
    );

   const[state,dispatch]= useReducer(reducer,null,initialValue)

    const dog=useRef()

    const cat=useRef()

    return (
        <div>
            <div>
                <input type="text" placeholder={'dogs'} ref={dog}/>
                <button onClick={()=>dispatch({type:'ADDDOG',payload:dog.current.value})}>AddDog</button>
                <input type="text" placeholder={'cats'} ref={cat}/>
                <button onClick={()=>dispatch({type:'ADDCAT',payload:cat.current.value})}>AddCat</button>
            </div>
<hr/>
            <div className={css.Pets}>
                <Cats cats={state.cats} dispatch={dispatch}/>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};
export {Pets};