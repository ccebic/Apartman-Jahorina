import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { images } from '../../images/trips';

const tripData = {
   images,
   texts: [
      'Boosnian pyramids',
      'Sunnyland',
      'Valley of Peace',
      'Yellow Fortres',
      'Sarajevo',
      'Source of the Miljacka',
      'Sebilj cesma',
      'Sport court and hall',
      'Latinska cuprija',
      'Sarajevo war tunnel',
   ],
};

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const TripSwiper = () => {
   return (
      <Swiper
         spaceBetween={10}
         slidesPerView={1}
         navigation={true}
         pagination={true}
         keyboard={true}
         loop={true}
         modules={[Navigation, Pagination, Keyboard]}
         className="mySwiper"
         breakpoints={{
            768: {
               slidesPerView: 3,
            },
         }}
      >
         {tripData.texts.map((text, index) => {
            return (
               <SwiperSlide key={index}>
                  <div>
                     <img src={tripData.images[index]} alt="Apartmani Jahorina" className="h-80 w-full" />
                     <p className="mb-10 bg-cyan-500 pl-3 text-white text-lg font-medium rounded-b-md lg:text-xl lg:h-10 flex items-center">
                        {text}
                     </p>
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};
