import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const postsService={
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}