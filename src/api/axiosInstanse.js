import axios from "axios";

const axiosInstanse=axios.create({
baseURL:`${import.meta.env.VITE_BURL}`,
headers:{
    'Accept-Language':'en'
}

});
export  default axiosInstanse;