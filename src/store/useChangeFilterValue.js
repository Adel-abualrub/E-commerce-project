import { create } from "zustand";

const useChangeFilterValue = create((set) => ({
page:1,
limit:5,
sortBy:'price',
setSortBy:(newSortValue) => set({ sortBy: newSortValue }),
ascending:false,
setAscending:(newAscendingValue)=> set  ({ascending:newAscendingValue}),
minPrice:null,
setMinPrice:(newMinPriceValue)=>({minPrice:newMinPriceValue}),
maxPrice:null,
setMinPrice:(newMaxPriceValue)=>({maxPrice:newMaxPriceValue})

   
}));
export default useChangeFilterValue;
