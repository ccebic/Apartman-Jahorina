import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';

export interface AboutImages {
   iOne: string;
   iTwo: string;
   iThree: string;
   iFour: string;
   iFive: string;
}

export const SwiperAbout = ({ iOne, iTwo, iThree, iFour, iFive }: AboutImages) => {
   const slideData = [
      { src: iOne, alt: 'Apartmani Jahorina' },
      { src: iTwo, alt: 'Apartmani Jahorina' },
      { src: iThree, alt: 'Apartmani Jahorina' },
      { src: iFour, alt: 'Apartmani Jahorina' },
      { src: iFive, alt: 'Apartmani Jahorina' },
   ];

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
         {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
               <img src={slide.src} alt={slide.alt} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
