

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import axiosInstanse from '../api/axiosInstanse';

export default function useCategores(limit) {
    
  const getCategories = async () => {
    const response = await axiosInstanse.get(`Categories?limit=${limit}`);
    return response.data;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories','en'],
    queryFn: getCategories,
    staleTime: 1000*60*10
  });
  return {data,isLoading,isError,error};
}
