import { useMemo } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useReviews } from '../../api/reviews';

export const Reviews = () => {
   const { reviews, isLoading, error } = useReviews();
   const [currentItem, setCurrentItem] = useState(0);

   const item = useMemo(() => (reviews ? reviews[currentItem] : undefined), [reviews, currentItem]);

   if (isLoading) return <div className="text-black text-5xl">Loading...</div>;
   if (error) return <div className="text-black text-5xl text-center">Something went wrong with this section, try again later...</div>;

   const prevReview = () => {
      setCurrentItem((prevItem) => {
         if (prevItem - 1 < 0) return reviews.length - 1;
         else return prevItem - 1;
      });
   };

   const nextReview = () => {
      setCurrentItem((prevItem) => {
         if (prevItem + 1 > reviews.length - 1) return 0;
         else return prevItem + 1;
      });
   };

   return (
      <main className="relative">
         <div className="absolute w-full h-10 bg-no-repeat left-0 rotate-180 -bottom-4 bg-[url(/images/rotten-curve-5.png)] z-30" />

         <div className="container py-20 mx-auto px-3 lg:px-72">
            <h1 className="text-center font-oleo text-4xl text-sky-800 lg:text-6xl">What have the guests said about us</h1>

            <div className="p-4 shadow-2xl rounded-xl text-center mt-4 lg:mt-7 lg:p-10">
               <p className="font-medium text-xl opacity-75">{item?.text}</p>
               <h4 className="text-sky-800 my-3 text-lg lg:font-medium">{item?.name}</h4>

               <div className="flex items-center gap-3 justify-center text-sky-800 text-2xl">
                  <FontAwesomeIcon
                     icon={faArrowLeft}
                     className="cursor-pointer active:scale-150 duration-75"
                     onClick={() => prevReview()}
                  />
                  <FontAwesomeIcon
                     icon={faArrowRight}
                     className="cursor-pointer active:scale-150 duration-75"
                     onClick={() => nextReview()}
                  />
               </div>
            </div>
         </div>
      </main>
   );
};
