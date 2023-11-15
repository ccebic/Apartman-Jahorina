import { imgPriceOne, imgPriceTwo, imgPriceThree } from '../../images/prices';
import { PriceBox } from '../../layout/components';

export const RoomsPrices = () => {
   const href = 'https://apartmani-jahorina.com/en-lang.html';

   return (
      <main className="py-10">
         <section className="container mx-auto px-5">
            <div className="mb-10">
               <small className="uppercase text-sky-800 text-lg lg:text-xl">luxury experience</small>
               <h2 className="mt-2 text-4xl lg:text-6xl font-bold">Rooms and prices</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 grid-rows-2 lg:flex">
               <PriceBox
                  href={href}
                  src={imgPriceOne}
                  alt="Vila Jelena Jahorina"
                  price={70}
                  apartment="apartment vila jelena"
                  minGuests={1}
                  maxGuests={4}
                  expanded={true}
               />
               <PriceBox
                  href={href}
                  src={imgPriceTwo}
                  alt="Vila Jelena Jahorina"
                  price={50}
                  apartment="room vila jelena"
                  minGuests={1}
                  maxGuests={2}
               />
               <PriceBox
                  href={href}
                  src={imgPriceThree}
                  alt="Vila Marina Jahorina"
                  price={350}
                  apartment="vila marina"
                  minGuests={1}
                  maxGuests={15}
               />
            </div>
         </section>
      </main>
   );
};
