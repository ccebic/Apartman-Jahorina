import { AboutSectionLayout } from './AboutLayout';
import Bcg from '../../images/vilaJelena/bcg-3.webp';
import Ione from '../../images/vilaJelena/jelena8-min.webp';
import Itwo from '../../images/vilaJelena/jelena9-min.webp';
import Ifive from '../../images/vilaJelena/jelena6-min.webp';
import Ifour from '../../images/vilaJelena/jelena11-min.webp';
import Ithree from '../../images/vilaJelena/jelena10-min.webp';
import BigPhoto from '../../images/vilaJelena/jelena13-min.webp';

export const AboutSectionJelena = () => {
   const background = {
      backgroundImage: `url(${Bcg})`,
   };

   const textForJelena =
      ' Villa Jelena is part of a complex of 3 apartments with different structures. The property is equipped to the highest standards and includes: The villa is located in a peaceful environment, surrounded by greenery and untouched nature, providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay. providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay.providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay.';

   return (
      <div style={background} className="bg-cover bg-center bg-no-repeat">
         <div className="container p-3 mx-auto">
            <AboutSectionLayout
               heading="Vila Jelena"
               text={textForJelena}
               ione={Ione}
               itwo={Itwo}
               ithree={Ithree}
               ifour={Ifour}
               ifive={Ifive}
               priceOne="Price from 70€/night (Apartment)"
               priceTwo="Price from 50€/night (Double room)"
               bigImage={BigPhoto}
            />
         </div>
      </div>
   );
};
