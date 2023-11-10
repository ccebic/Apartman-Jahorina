import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';

export interface AboutImages {
   images: string[];
}

export const AboutSwiper = ({ images }: AboutImages) => {
   return (
      <Swiper
         spaceBetween={10}
         slidesPerView={2}
         scrollbar={{
            hide: true,
         }}
         loop={true}
         navigation={true}
         modules={[Scrollbar, Navigation]}
         breakpoints={{
            768: {
               slidesPerView: 3,
            },
         }}
      >
         {images.map((image, index) => (
            <SwiperSlide key={index}>
               <img src={image} alt="Apartmani Jahorina" />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
