import {axiosService} from "./axiosService";
import {urls} from "../configs";

const userService={
    getAll:()=>axiosService.get(urls.users),
    create:(newUser)=>axiosService.post(urls.users,newUser)
}

const postService={
    getAll:()=>axiosService.get(urls.posts),
    create:(newPost)=>axiosService.post(urls.posts,newPost)
}

export {
    userService,postService
}