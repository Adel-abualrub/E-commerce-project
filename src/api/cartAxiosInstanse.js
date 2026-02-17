import axios from "axios";
const token = localStorage.getItem("AccessToken");
const CartAxiosInstanse=axios.create({
baseURL:`${import.meta.env.VITE_BURL}`,
headers:{
    'Accept-Language':'en',
Authorization:`Bearer ${token}`
}

});
export  default CartAxiosInstanse ;