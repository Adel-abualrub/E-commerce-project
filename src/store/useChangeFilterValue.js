import { create } from "zustand";

const useChangeFilterValue = create((set) => ({
page:1,
limit:5,
sortBy:'price',
setSortBy:(newSortValue) => set({ sortBy: newSortValue }),
ascending:false,
setAscending:(newAscendingValue)=> set  ({ascending:newAscendingValue}),
minPrice:null,
setMinPrice:(newMinPriceValue)=>set({minPrice:newMinPriceValue}),
maxPrice:null,
setMaxPrice:(newMaxPriceValue)=>set({maxPrice:newMaxPriceValue}),
search:null,
setSearch:(newSearchValue)=>set({search:newSearchValue})

   
}));
export default useChangeFilterValue;
