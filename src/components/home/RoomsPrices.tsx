import { getData } from '../../api/pricesApi';
import { PriceBox } from '../../layout/components';

export const RoomsPrices = () => {
   const { data, isLoading, isError } = getData();

   if (isLoading) return <div className="text-black text-5xl">Loading...</div>;
   if (isError) return <div className="text-black text-5xl">Something went wrong, try again later...</div>;

   const priceBoxes = data?.map((item: any) => {
      return (
         <PriceBox
            key={item.id}
            src={item.img}
            alt={item.alt}
            href={item.href}
            price={item.price}
            apartment={item.apart}
            expanded={item.expanded}
            minGuests={item.minGuests}
            maxGuests={item.maxGuests}
         />
      );
   });

   return (
      <main className="py-10">
         <section className="container mx-auto px-5">
            <div className="mb-10">
               <small className="uppercase text-sky-800 text-lg lg:text-xl">luxury experience</small>
               <h2 className="mt-2 text-4xl lg:text-6xl font-bold">Rooms and prices</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 grid-rows-2 lg:flex">{priceBoxes}</div>
         </section>
      </main>
   );
};
