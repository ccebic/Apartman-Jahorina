import { TripSwiper } from '../../layout/components/TripSwiper';

export const Trips = () => {
   return (
      <section className="px-2 py-20">
         <div className="container mx-auto">
            <h3 className="text-center font-oleo text-5xl text-cyan-500 mb-5 lg:text-7xl">It would be goot to see</h3>
            <div>
               <TripSwiper />
            </div>
         </div>
      </section>
   );
};
