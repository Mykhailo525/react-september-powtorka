import {axiosService} from "./index";
import {urls} from "../configs";

const commentsService={
    getAll:()=>axiosService.get(urls.comments)
}

export {commentsService}