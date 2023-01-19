import {axiosService} from "./axiosService";

const userService={

 getAll:()=>axiosService.get('/posts')
}
export {userService}