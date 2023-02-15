import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    updateById:(id,data)=>axiosService.put(`${urls.cars}/${id}`,data),
    create:(newCar)=>axiosService.post(urls.cars,newCar),
    deleteById:(id)=>axiosService.put(`${urls.cars}/${id}`)
}

export {
    carService
}