import { FooterLink } from './components';
import { SocialIcon } from './components';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Logo from '../images/VilaMarina.png';

export const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-zinc-800">
         <div className="container mx-auto p-10">
            <div className="flex flex-col justify-center items-center text-center gap-7">
               <div className="flex justify-center">
                  <a href="https://www.instagram.com/vilamarina_jahorina/">
                     <img src={Logo} alt="Vila Marina Jahorina Logo" className="w-[90px] h-[90px]" />
                  </a>
               </div>

               <div>
                  <ul className="grid grid-cols-2 justify-center gap-5 uppercase xl:flex lg:grid-cols-4">
                     <FooterLink href="#villa-marina" text="villa marina" />
                     <FooterLink href="#villa-jelena" text="villa jelena" />
                     <FooterLink href="#price" text="price" />
                     <FooterLink href="#reservation" text="reservation" />
                     <FooterLink href="#about us" text="about us" />
                     <FooterLink href="#gallery" text="gallery" />
                     <FooterLink href="#location" text="location" />
                     <FooterLink href="#contact" text="contact" />
                  </ul>
               </div>

               <ul className="flex justify-center items-center gap-7">
                  <SocialIcon href="facebook link" icon={faFacebook} className="text-cyan-500" />
                  <SocialIcon href="facebook link" icon={faInstagram} className="text-cyan-500" />
                  <SocialIcon href="facebook link" text="B." className="text-[38px] text-cyan-500  font-bold relative top-[-3px]" />
               </ul>
            </div>
         </div>
         <div className="flex flex-col md:flex-row md:justify-between  justify-center py-3 px-2 bg-zinc-900 items-center text-white font-medium">
            <p>Villa Marina | Villa Jelena</p>
            <p>
               © Copyrights {currentYear}
               <span> Čedomir Ćebić.</span>
            </p>
         </div>
      </footer>
   );
};
