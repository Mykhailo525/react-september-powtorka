import {Cars} from "./components/Cars/Cars";
import {CarForm} from "./components/CarForm/CarForm";
import {useEffect, useState} from "react";
import {carService} from "./services";


const App = () => {
    const [cars,setCars]=useState([])
    const [updateCar,setUpdateCar]=useState(null)


    useEffect(()=>{carService.getAll().then(value => value.data).then(value => setCars([...value]))},[])

  return (
      <div>
          <CarForm setCars={setCars} updateCar={updateCar} />
          <hr/>
        <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
      </div>
  );
};

export {App};