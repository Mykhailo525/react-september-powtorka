import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService={
    create:(user)=>axiosService.post(urls.users,user)
}

export {userService}