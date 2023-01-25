
import {Car} from "../Car/Car";

const Cars = ({cars,setUpdateCar,setCars}) => {

    return (
        <div>
            {cars.map((car,index)=><Car key={index+1} car={car} setUpdateCar={setUpdateCar} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};