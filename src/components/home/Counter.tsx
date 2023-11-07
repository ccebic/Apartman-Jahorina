import { useEffect, useState, useRef } from 'react';
import { faUser, faPersonSkiing, faMountain, faStar } from '@fortawesome/free-solid-svg-icons';

import CountUp from 'react-countup';
import curve from '../../images/rotten-curve-5.png';
import { CounterBox } from '../../layout/components/CounterBox';

export const CounterUp = () => {
   const CurveStyle = {
      backgroundImage: `url(${curve})`,
   };
   const counterContentClass =
      'flex flex-col gap-5 items-center md:grid md:grid-cols-2 md:justify-items-center justify-center lg:flex lg:flex-row';

   const [counterOn, setCounterOn] = useState(false);

   const counterSectionRef = useRef(null);

   const handleScroll = () => {
      const counterSection = counterSectionRef.current;
      if (counterSection) {
         const rect = (counterSection as HTMLElement).getBoundingClientRect();
         if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setCounterOn(true);
         } else {
            setCounterOn(false);
         }
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
   }, []);

   return (
      <div className="counter p-7 lg:p-10 relative" ref={counterSectionRef}>
         <div className="absolute w-full h-10 bg-no-repeat left-0 rotate-180 -bottom-4" style={CurveStyle} />

         <div className="container mx-auto">
            <div className={`${counterContentClass}`}>
               <CounterBox icon={faUser} units="" text="Happy guests">
                  {counterOn && <CountUp start={0} end={400} duration={4.2} />}
               </CounterBox>

               <CounterBox icon={faPersonSkiing} units="km" text="Length of ski trail">
                  {counterOn && <CountUp start={0} end={45} duration={4.2} />}
               </CounterBox>

               <CounterBox icon={faMountain} units="m" text="Altitude">
                  {counterOn && <CountUp start={0} end={1350} duration={4.2} />}
               </CounterBox>

               <CounterBox icon={faStar} units="" text="Five stars">
                  {counterOn && <CountUp start={0} end={340} duration={4.2} />}
               </CounterBox>
            </div>
         </div>
      </div>
   );
};