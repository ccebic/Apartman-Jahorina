import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export interface AboutImages {
   ione: string;
   itwo: string;
   ithree: string;
   ifour: string;
   ifive: string;
}

export const SwiperAbout: React.FC<AboutImages> = ({ ione, itwo, ithree, ifour, ifive }) => {
   const slideData = [
      { src: ione, alt: 'Apartmani Jahorina' },
      { src: itwo, alt: 'Apartmani Jahorina' },
      { src: ithree, alt: 'Apartmani Jahorina' },
      { src: ifour, alt: 'Apartmani Jahorina' },
      { src: ifive, alt: 'Apartmani Jahorina' },
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
