import { AboutLayout, Curve } from '.';
import { images, BigPhoto } from '../../images/vilaMarina';

export const AboutMarina = () => {
   const textForMarina =
      'Vila Marina je dio kompleksa od 3 apartmana različite strukture. Objekat je opremljen po najvišim standardima, a uključuje Prostrane sobe s elegantnim namještajem. Moderna i opremljena kuhinja sa svim potrebnim elementima.Dnevni boravak opremljen je velikim prozorima koji pružaju prekrasan pogled na prirodu.Vanjski prostori poput terase i vrta dizajnirani za opuštanje i druženje s prijateljima.Vila se nalazi u mirnom okruženju, okružena zelenilom i netaknutom prirodom, što vam pruža savršenu priliku za opuštanje i uživanje prirodi. Iako je vila okružena prirodom, do nje se može lako stići automobilom, tako da ćete se osjećati izolirano i opušteno, a ipak bitblizu svih važnih atrakcija i aktivnosti. Naša vila ima sve što vam treba za udoban i opuštajući boravak.';
   return (
      <main className="bg-cover bg-center relative bg-no-repeat bg-[url(/images/bcg-3.webp)]">
         <div className="container p-3 mx-auto">
            <AboutLayout
               heading="Vila Marina"
               text={textForMarina}
               images={images}
               priceOne="Cijena od 350€/noć (Kuća)"
               bigImage={BigPhoto}
               reverse={true}
            />
         </div>
         <Curve />
      </main>
   );
};
