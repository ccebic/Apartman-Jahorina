import { useState } from 'react';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '.';
import { ModalVideo } from '../../layout/components';
import ImageForVideo from '../../images/vilaJelena/jelena8-min.webp';

export const About = () => {
   const [isOpen, setIsOpen] = useState(false);

   const textAbout =
      "The facilities are designed in harmony with the natural surroundings, characterized by a specific roof shape that makesthem recognizable. The buildings are equipped with modern amenities, up to the highest standards. Villa Marina is designedfor individual arrival of groups of people, while Villa Jelena's structure is based on apartments and double rooms. Weemphasize that the surroundings are peaceful and ideal for relaxation. Additionally, the views from our units arebreathtaking.";

   const iconClass = 'absolute top-1/2 left-1/2 text-5xl text-cyan-600 -translate-y-1/2 -translate-x-1/2 group-hover:text-7xl duration-300';

   return (
      <main className="bg-[url(/images/bcg-1.webp)] py-6 bg-center bg-no-repeat bg-cover relative" onClick={() => console.log('lcicke')}>
         <div className="absolute top-0 left-0 w-1/3 h-full bg-[url(/images/slide-img-min.webp)]" />

         <div className="container mx-auto flex gap-5 flex-col px-3 md:flex-row md:items-center lg:px-56 lg:py-10">
            <div className="rounded-md overflow-hidden md:flex-1 lg:h-[600px]">
               <div className="group relative lg:h-full cursor-pointer" onClick={() => setIsOpen(true)}>
                  <div>
                     <img src={ImageForVideo} alt="Apartmani Jahorina" className="w-full h-[600px]" />
                  </div>
                  <FontAwesomeIcon icon={faCirclePlay} className={iconClass} />
               </div>
            </div>

            <div className="flex flex-col gap-4 p-4 backdrop-blur-lg items-start md:flex-1 rounded-2xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
               <p className="text-white text-xl font-bold self-center lg:self-start lg:text-2xl">More about us</p>
               <h2 className="text-center font-oleo text-5xl lg:text-start lg:text-6xl">Elegant villa, natural paradise</h2>
               <p className="text-white text-lg lg:text-xl">{textAbout}</p>
               <Button href="#" outline={false} decoration={true}>
                  book now
               </Button>
            </div>
         </div>

         <ModalVideo open={isOpen} onClose={() => setIsOpen(false)} />
      </main>
   );
};
