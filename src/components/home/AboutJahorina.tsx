import { Button } from '.';
import { ImgJahorinaOne, ImgJahorinaTwo } from '../../images/jahorina';

export const AboutJahorina = () => {
   const textAboutJahorina =
      'Jahorina je planina koja oduzima dah svojom netaknutom prirodom, čistim zrakom i beskrajnim pogledima. U zimskim mjesecima, ova planina postaje pravo skijaško odredište s preko 25 km uređenih staza, dok je ljeti idealna destinacija za ljubitelje planinarenja, biciklizma i raznih drugih aktivnosti na otvorenom. Bez obzira na godišnje doba, Jahorina nudi nezaboravno iskustvo koje će zauvijek ostati u vašim uspomenama.';
   return (
      <section className="py-12 bg-[url(./images/bcg-3.webp)] bg-no-repeat bg-top bg-cover lg:px-16">
         <div className="container mx-auto">
            <main className="px-3 flex flex-col gap-10 lg:flex-row items-center">
               <div className="flex-1 group">
                  <img src={ImgJahorinaOne} alt="Jahorina Apartmani" className="group-hover:scale-110 duration-200" />
               </div>

               <div className="p-3 backdrop-blur-lg flex flex-col items-start gap-5 flex-1 lg:items-center rounded-2xl shadow-2xl">
                  <h2 className="text-center font-oleo text-2xl lg:text-4xl lg:text-sky-800 text-white">
                     Jahorina: Odmaralište koje spaja avanturu i opuštanje
                  </h2>

                  <p className="text-lg font-medium">{textAboutJahorina}</p>

                  <Button href="https://apartmani-jahorina.com/" outline={false} decoration={false}>
                     booking.com
                  </Button>
               </div>

               <div className="flex-1 group">
                  <img src={ImgJahorinaTwo} alt="Jahorina Apartmani" className="group-hover:scale-110 duration-200" />
               </div>
            </main>
         </div>
      </section>
   );
};
