import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PricesBoxProps {
   alt: string;
   src: string;
   href: string;
   price: number;
   apartment: string;
   minGuests: number;
   maxGuests: number;
   expanded?: boolean;
}

export const PriceBox = ({ href, src, alt, price, apartment, minGuests, maxGuests, expanded }: PricesBoxProps) => {
   const textContentClass =
      'absolute cursor-pointer bottom-0 left-0 w-full pl-4 pt-20 pr-5 pb-3 text-white font-medium text-md duration-300 group-hover:shadow-[inset_0_-135px_73px_-76px_rgba(0,0,0,0.81)]';

   return (
      <div className={`group relative h-[400px] flex items-center rounded-xl overflow-hidden ${expanded ? 'lg:flex-[2]' : 'lg:flex-1'}`}>
         <a href={href}>
            <img src={src} alt={alt} className="h-full group-hover:scale-110 duration-300" />
         </a>

         <div className={textContentClass}>
            <p className="uppercase">from {price}€/night</p>

            <span className="uppercase mr-1">{apartment}</span>
            <span>
               {minGuests}-{maxGuests}
               <FontAwesomeIcon className="ml-1" icon={faUser} />
            </span>
         </div>
      </div>
   );
};
