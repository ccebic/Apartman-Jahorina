import { useApartment } from '../../api/apartment';
import { Apartment } from '../../layout/components';

export const Apartments = () => {
   const { apartments, isLoading, error } = useApartment();

   if (isLoading) return <div className="text-black text-5xl">Loading...</div>;
   if (error) return <div className="text-black text-5xl text-center">Something went wrong with this section, try again later...</div>;

   return (
      <main className="py-10">
         <section className="container mx-auto px-5">
            <div className="mb-10">
               <small className="uppercase text-sky-800 text-lg lg:text-xl">luxury experience</small>
               <h2 className="mt-2 text-4xl lg:text-6xl font-bold">Rooms and prices</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 grid-rows-2 lg:flex">
               {apartments?.map((apartment) => (
                  <Apartment key={apartment.id} {...apartment} />
               ))}
            </div>
         </section>
      </main>
   );
};
