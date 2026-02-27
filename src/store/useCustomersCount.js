import { create } from "zustand";

export const useCustomersCount=create((set)=>{
return{
count:0,
increaseCount:()=>{
set((state)=>({

count:state.count+1

}))
}

}

})