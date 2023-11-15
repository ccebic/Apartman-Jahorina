import { AboutImages } from './AboutSwiper';
import { AboutSwiper, BoxesAbout, Button } from '.';

interface AboutSectionProp extends AboutImages {
   text: string;
   heading: string;
   priceOne: string;
   priceTwo: string;
   bigImage: string;
}
export const AboutLayout = ({ heading, text, images, priceOne, priceTwo, bigImage }: AboutSectionProp) => {
   const headingTextClass = 'text-center text-5xl text-sky-800 font-bold md:text-left md:text-7xl lg:text-center';
   const shadow = { boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 13px 5px' };
   const priceClass = 'bg-cyan-500 text-center font-medium';

   return (
      <main className="lg:flex pr-5 py-6">
         <div className="flex-1 hidden lg:flex items-center justify-center">
            <img src={bigImage} alt="Apartmani Jahorina" />
         </div>

         <div className="flex-1 overflow-hidden">
            <div className="flex flex-col gap-5 text-black mb-30px backdrop-blur py-5 px-1 rounded-lg" style={shadow}>
               <h2 className={headingTextClass}>{heading}</h2>
               <BoxesAbout />

               <div className="font-bold leading-7 overflow-y-scroll lg:text-xl h-[400px] lg:[300px] tracking-widest">
                  <p className="px-3">{text}</p>
               </div>
            </div>

            <div className="mt-10 mb-4 ">
               <AboutSwiper images={images} />
            </div>

            <p className={priceClass}>{priceOne}</p>
            <p className={`${priceClass} mt-2`}>{priceTwo}</p>

            <div className="flex align-middle uppercase justify-center mt-5 gap-5">
               <Button href="#" decoration={true} outline={false}>
                  book now
               </Button>
               <Button href="#" decoration={false} outline={true}>
                  booking.com
               </Button>
            </div>
         </div>
      </main>
   );
};
