import { ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive } from '../../images/modalImages.ts';
import { Circle, GalleryItem } from '../../layout/components';

export const Gallery = () => {
   return (
      <main className="px-3 py-12 relative overflow-hidden lg:px-36">
         <Circle position="left-[-300px] top-[-400px]" />
         <Circle position="right-[-300px] bottom-[-400px]" />

         <div className="container mx-auto">
            <div className="grid grid-cols-5 grid-rows-[repeat(5,100px)] gap-3 lg:grid-cols-8 lg:grid-rows-[repeat(5,140px)]">
               <GalleryItem className="col-start-1 row-start-4 col-end-3 row-end-6 shadow-2xl" src={ImageOne} />

               <GalleryItem className="col-start-1 row-start-1 col-end-3 row-end-4 shadow-2xl" src={ImageTwo} />

               <GalleryItem className="col-start-3 row-start-1 col-end-6 row-end-6 shadow-2xl" src={ImageThree} />

               <GalleryItem className="hidden lg:block col-start-6 row-start-3 col-end-9 row-end-6 shadow-xl" src={ImageFour} />

               <GalleryItem className="hidden lg:block col-start-6 row-start-1 col-end-9 row-end-3 shadow-xl" src={ImageFive} />
            </div>
         </div>
      </main>
   );
};
