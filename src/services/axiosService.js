import axios from "axios";
import {baseURL} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const history=createBrowserHistory()

const axiosService=axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
    if (authService.isAuthenticated()) {
        const access=authService.getAccessToken()
        config.headers.Authorization =`Bearer ${access}`
    }
    return config
})


let isRefreshing=false

axiosService.interceptors.response.use((config) => {
        return config
    },
    async (error)=>{
    const refresh=authService.getRefreshToken()

        if(error.response?.status===401 && refresh && !isRefreshing){
            isRefreshing=true
            try {
                await authService.refresh(refresh)
            }catch (e) {
                authService.deleteTokens()
                history.replace('/login?expiredSession=true')
            }

            isRefreshing=false;
            return axiosService(error.config)
        }

        return Promise.reject(error)
    }
)


export {
    axiosService,history
}