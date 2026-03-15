import axios from "axios";
import i18n from "../i18next";
const token = localStorage.getItem("AccessToken");
const CartAxiosInstanse=axios.create({
baseURL:`${import.meta.env.VITE_BURL}`,
headers:{
    'Accept-Language':i18n.language,
"Authorization":`Bearer ${token}`
}

});
export  default CartAxiosInstanse ;