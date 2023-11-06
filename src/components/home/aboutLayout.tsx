import { BoxesAbout } from './BoxAbout';
import { AboutImages } from './AboutSwiper';
import { SwiperAbout } from './AboutSwiper';

interface AboutSectionProp extends AboutImages {
   heading: string;
   text: string;
   priceOne: string;
   priceTwo: string;
   bigImage: string;
}

export const AboutSectionLayout: React.FC<AboutSectionProp> = ({
   heading,
   text,
   ione,
   itwo,
   ithree,
   ifour,
   ifive,
   priceOne,
   priceTwo,
   bigImage,
}) => {
   const shadow = {
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 13px 5px',
   };

   return (
      <div className="content  lg:flex  pr-5">
         <div className="left-side flex-1 hidden  lg:flex items-center justify-center">
            <img src={bigImage} alt="Apartmani Jahorina" />
         </div>
         <div className="right-side flex-1 overflow-hidden">
            <div className="text-content flex flex-col gap-5 text-black mb-30px backdrop-blur py-5 px-1 rounded-lg" style={shadow}>
               <h2 className="text-center text-5xl text-sky-800 font-bold md:text-left md:text-7xl lg:text-center">{heading}</h2>
               <BoxesAbout />
               <div className="about-jelena font-bold leading-7 overflow-y-scroll lg:text-xl h-[400px] lg:[300px] tracking-widest">
                  <p className="px-3">{text}</p>
               </div>
            </div>
            <div className="photo-content mt-10 mb-4 ">
               <SwiperAbout ione={ione} itwo={itwo} ithree={ithree} ifour={ifour} ifive={ifive} />
            </div>
            <p className="bg-cyan-500 text-center font-medium ">{priceOne}</p>
            <p className="bg-cyan-500 text-center font-medium mt-2 ">{priceTwo}</p>
            <div className="btn-content flex align-middle justify-center mt-5 gap-5">
               <a href="#" className="p-2 bg-sky-800 uppercase text-white rounded hover:bg-cyan-500 duration-300">
                  book now
               </a>
               <a href="#" className="p-2 bg-sky-800  uppercase text-white rounded hover:bg-cyan-500 duration-300">
                  booking.com
               </a>
            </div>
         </div>
      </div>
   );
};
