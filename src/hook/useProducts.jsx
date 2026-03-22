import axiosInstanse from '../api/axiosInstanse';
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next';
import useChangeFilterValue from '../store/useChangeFilterValue';

export default function useProducts() {
  const page = useChangeFilterValue((state) => state.page);
  const limit = useChangeFilterValue((state) => state.limit);
  const sortBy = useChangeFilterValue((state) => state.sortBy);
  const ascending = useChangeFilterValue((state) => state.ascending);
  const minPrice = useChangeFilterValue((state) => state.minPrice);
  const maxPrice = useChangeFilterValue((state) => state.maxPrice);
const search=useChangeFilterValue((state)=>state.search);
  const getProducts = async () => {
    const response = await axiosInstanse.get(`Products`, {
      params: {
        page,
        limit,
        sortBy,
        ascending,
        minPrice,
        maxPrice,
        search
      }
    });
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    // 2. تحديث الـ queryKey ليشمل كل المتغيرات لضمان الـ Re-fetch التلقائي
    queryKey: ['products', i18n.language, page, limit, sortBy, ascending, minPrice, maxPrice,search],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 10,
  });

  return { data, isLoading, isError, error };
}