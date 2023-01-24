import {axiosService} from "./axiosService";

const userService={
    getAll:()=>axiosService.get('/users'),
    getPostsById:(id)=>axiosService.get(`/users/${id}/posts`)
}

export {
    userService
}