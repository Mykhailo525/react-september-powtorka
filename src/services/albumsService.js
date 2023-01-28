import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const albumsService={
    getAll:()=>axiosService.get(urls.albums)
}

export {
    albumsService
}