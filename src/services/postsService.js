import {axiosService} from "./index";
import {urls} from "../configs";

const postsService={
    getAll:()=>axiosService.get(urls.posts)
}

export {postsService}