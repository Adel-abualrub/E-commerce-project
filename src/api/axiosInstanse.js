import axios from "axios";
import i18n from "../i18next";

const axiosInstanse=axios.create({
baseURL:`${import.meta.env.VITE_BURL}`,withCredentials:true


});
axiosInstanse.interceptors.request.use((config)=>{
    config.headers["Accept-Language"]=i18n.language;
    return config
})
export  default axiosInstanse;