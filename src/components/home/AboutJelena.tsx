import { AboutLayout, Curve } from '.';
import { images, BigPhoto, Bcg } from '../../images/vilaJelena';

export const AboutJelena = () => {
   const background = {
      backgroundImage: `url(${Bcg})`,
   };

   const textForJelena =
      ' Villa Jelena is part of a complex of 3 apartments with different structures. The property is equipped to the highest standards and includes: The villa is located in a peaceful environment, surrounded by greenery and untouched nature, providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay. providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay.providing you with a perfect opportunity for relaxation and enjoyment of nature. Although the villa is surrounded by nature, it is easily accessible by car, so you will feel isolated and relaxed, yet still be close to all important attractions and activities. Our villa has everything you need for a comfortable and relaxing stay.';

   return (
      <main style={background} className="bg-cover bg-center relative bg-no-repeat">
         <div className="container p-3 mx-auto">
            <AboutLayout
               heading="Vila Jelena"
               text={textForJelena}
               images={images}
               priceOne="Price from 70€/night (Apartment)"
               priceTwo="Price from 50€/night (Double room)"
               bigImage={BigPhoto}
            />
         </div>
         <Curve />
      </main>
   );
};
