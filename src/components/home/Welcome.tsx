import { Button, Curve } from '.';

export const Welcome = () => {
   return (
      <section className="py-16 relative bg-[url(/images/sentence.webp)] bg-cover bg-no-repeat bg-fixed bg-center">
         <div className="absolute h-full w-full left-0 top-0 bg-black opacity-60" />

         <Curve />

         <main className="container mx-auto relative">
            <div className="px-3 flex flex-col gap-8 items-center text-center">
               <h3 className="font-oleo text-cyan-500 text-5xl lg:text-7xl">Make us happy, be our guests.</h3>
               <p className="text-white opacity-80 text-lg font-medium lg:w-[50%] lg:text-xl">
                  Our villa is an ideal place for those seeking peace and quiet, as well as comfort and modern accommodation. Come and enjoy
                  the beautiful surroundings and spectacular views that will take your breath away!
               </p>

               <div className="flex gap-4">
                  <Button outline={true} decoration={false} href="https://apartmani-jahorina.com/en-lang.html">
                     write to us
                  </Button>

                  <Button outline={false} decoration={true} href="https://apartmani-jahorina.com/en-lang.html">
                     book now
                  </Button>
               </div>
            </div>
         </main>
      </section>
   );
};
