import { create } from "zustand";

const useAuthStore = create((set) => ({


    token: localStorage.getItem("AccessToken"),
    setToken: (NewToken) => {
      set({
        token: NewToken,
      });
      localStorage.setItem("AccessToken", NewToken);
    },

LogOut:()=>{

  set(
    {
      token:null
    }
  )
  localStorage.removeItem("AccessToken");
}
}));
export default useAuthStore;
