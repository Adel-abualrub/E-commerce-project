import { create } from "zustand";

const useAuthStore = create((set) => ({


    token: localStorage.getItem("AccessToken"),
    setToken: (NewToken) => {
      set({
        token: NewToken,
      });
      localStorage.setItem("AccessToken", NewToken);
    },


}));
export default useAuthStore;
