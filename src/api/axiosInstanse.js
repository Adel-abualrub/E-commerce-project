import axios from "axios";

const axiosInstanse=await axios.create({
baseURL:`${import.meta.env.VITE_BURL}`,
headers:{
    'Accept-Language':'en'
}

});
export  default axiosInstanse;