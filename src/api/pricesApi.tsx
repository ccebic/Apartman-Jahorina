import useSWR from 'swr';
import axios from 'axios';

export const getData = () => {
   const fetcher = (data: any) => axios.get(data).then((res) => res.data);
   const { data, isLoading, error } = useSWR('http://localhost:3500/apartments', fetcher);

   return {
      data: data,
      isLoading,
      isError: error,
   };
};
