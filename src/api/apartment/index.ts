import useSWR from 'swr';
import { http } from '../http';

export interface ApartmentProp {
    id: number;
    alt: string;
    img: string;
    href: string;
    price: number;
    apartment: string;
    minGuests: number;
    maxGuests: number;
    expanded?: boolean;
}

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export const useApartment = () => {
   const { data, isLoading, error } = useSWR<ApartmentProp[]>('/apartments', fetcher);

   return {
      apartments: data,
      error,
      isLoading,
   };
};
