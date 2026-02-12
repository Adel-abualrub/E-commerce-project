

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useCategores() {
    
  const getCategories = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BURL}Categories`);
    return response.data;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });
  return {data,isLoading,isError,error};
}
