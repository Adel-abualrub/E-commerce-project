import axios from "axios";
import i18n from "../i18next";
const token = localStorage.getItem("AccessToken");
import useAuthStore from "./../store/useAuthStore";
import axiosInstanse from "./axiosInstanse";


const CartAxiosInstanse = axios.create({
  baseURL: `${import.meta.env.VITE_BURL}`,
  withCredentials: true,
});


CartAxiosInstanse.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  config.headers["Accept-Language"] = i18n.language;
  config.headers["Authorization"] = `Bearer ${token}`;
  console.log(token);
  return config;
});


CartAxiosInstanse.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(`${import.meta.env.VITE_REFURL}`,{},{withCredentials:true})
        const newAccessToken = refreshResponse.data.accessToken;
        useAuthStore.getState().setToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return CartAxiosInstanse(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
export default CartAxiosInstanse;
