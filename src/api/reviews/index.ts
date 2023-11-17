import useSWR from 'swr';
import { http } from '../http';

export interface ReviewProp {
    id: number
    name: string
    text: string
}

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const useReviews = () => {
   const { data, isLoading, error } = useSWR<ReviewProp[]>('/reviews', fetcher);

   return {
      reviews: data || [],
      error,
      isLoading,
   };
};