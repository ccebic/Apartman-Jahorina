import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Reviews = () => {
   const reviewsEng = [
      {
         id: 1,
         name: 'Vukman B.',
         text: 'Excellent accommodation, peaceful surroundings. The interior is modern and luxuriously furnished, everything was clean and tidy, and the hosts were very kind and approachable. We will gladly return next season.',
      },
      {
         id: 2,
         name: 'Leonarda M.',
         text: 'The hostess was extremely kind and always available and ready to help us. We felt at home. The environment is peaceful and pleasant. An excellent recommendation for good and comfortable accommodation.',
      },
      {
         id: 3,
         name: 'Petar P.',
         text: 'This villa is ideal for a family vacation. Everything was clean and tidy, and the kitchen is fully equipped with all the necessary things. The children enjoyed it, and the proximity to the ski slopes and shops is also a big plus.',
      },
      {
         id: 4,
         name: 'Martin K.',
         text: 'The villa has a beautiful interior, a very pleasant atmosphere, and plenty of space for everyone. You feel at home here. Also, a big plus is that the villa is very clean. I would definitely recommend this  to anyone who wants to enjoy nature and comfort.',
      },
      {
         id: 5,
         name: 'Lucija A.',
         text: 'The villa is a perfect combination of modern and rustic. The view from the terrace of the mountains is spectacular. The staff was very pleasant and kind. I definitely hope to come back here next year.',
      },
      {
         id: 6,
         name: 'Aleksa L.',
         text: 'I am thrilled with my stay at this villa - the interior is modernly designed, everything was clean and tidy, and the staff very kind. I would recommend this place to anyone who wants to relax in nature.',
      },
   ];

   const [currentItem, setCurrentItem] = useState(0);

   const item = reviewsEng[currentItem];

   return (
      <main className="relative">
         <div className="absolute w-full h-10 bg-no-repeat left-0 rotate-180 -bottom-4 bg-[url(/images/rotten-curve-5.png)] z-30" />

         <div className="container py-20 mx-auto px-3 lg:px-72">
            <h1 className="text-center font-oleo text-4xl text-sky-800 lg:text-6xl">What have the guests said about us</h1>

            <div className="p-4 shadow-2xl rounded-xl text-center mt-4 lg:mt-7 lg:p-10">
               <p className="font-medium text-xl opacity-75">{item.text}</p>
               <h4 className="text-sky-800 my-3 text-lg lg:font-medium">{item.name}</h4>

               <div className="flex items-center gap-3 justify-center text-sky-800 text-2xl">
                  <FontAwesomeIcon
                     icon={faArrowLeft}
                     className="cursor-pointer"
                     onClick={() => {
                        setCurrentItem((prevItem) => {
                           if (prevItem - 1 < 0) {
                              return reviewsEng.length - 1;
                           } else {
                              return prevItem - 1;
                           }
                        });
                     }}
                  />
                  <FontAwesomeIcon
                     icon={faArrowRight}
                     className="cursor-pointer"
                     onClick={() => {
                        setCurrentItem((prevItem) => {
                           if (prevItem + 1 > reviewsEng.length - 1) {
                              return 0;
                           } else {
                              return prevItem + 1;
                           }
                        });
                     }}
                  />
               </div>
            </div>
         </div>
      </main>
   );
};
