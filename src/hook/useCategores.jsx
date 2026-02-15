

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import axiosInstanse from '../api/axiosInstanse';

export default function useCategores() {
    
  const getCategories = async () => {
    const response = await axiosInstanse.get('Categories');
    return response.data;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000*60*10
  });
  return {data,isLoading,isError,error};
}
