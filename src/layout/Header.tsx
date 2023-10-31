import { SocialIcon } from './components/SocialIcon';
import { NavHeaderLink } from './components/NavLinks';
import { useState } from 'react';
import { faViber, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/VilaMarina.png';

export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <div className="py-3 bg-sky-500 shadow-md">
         <div className="nav container mx-auto px-2">
            <div className="content flex justify-between">
               <div className="logo cursor-pointer hover:-translate-y-2 hover:drop-shadow-md duration-300 z-20">
                  <img src={Logo} className="lg:w-20 lg:h-20 w-14 h-14" alt="Vila Marina Jahorina Logo" />
               </div>
               <div className="navbar flex gap-8 items-center">
                  <div className="icon-menu hidden md:block">
                     <ul className="icon-menu-content items-center flex gap-4">
                        <SocialIcon href="facebook link" icon={faViber} />
                        <SocialIcon href="facebook link" text="B." extraClasses="text-[38px]  font-bold relative top-[-6px]" />
                        <SocialIcon href="facebook link" icon={faFacebook} />
                        <SocialIcon href="facebook link" icon={faInstagram} />
                     </ul>
                  </div>
                  <nav
                     className={`menu fixed h-screen w-full top-0   flex items-center justify-end  z-10 pr-24 sm:w-4/5 bg-gradient-to-b  from-blue-600/[0.9] to-sky-600/[0.9] transition-all duration-200 ${
                        menuOpen ? 'lg:left-[-45%] left-[-20%] md:left-[-35%] xl:left-[-50%]' : 'left-[-100%]'
                     }`}
                  >
                     <ul className="nav-menu flex flex-col gap-6 uppercase text-md lg:text-2xl text-white">
                        <NavHeaderLink href="#villa-marina" text="Vila Marina" />
                        <NavHeaderLink href="#villa-jelena" text="Vila Jelena" />
                        <NavHeaderLink href="#prices" text="Cijene" />
                        <NavHeaderLink href="#reservation" text="Rezervacija" />
                        <NavHeaderLink href="#about-us" text="O Nama" />
                        <NavHeaderLink href="#gallery" text="Galerija" />
                        <NavHeaderLink href="#location" text="Lokacija" />
                        <NavHeaderLink href="#contact" text="Kontakt" />
                        <NavHeaderLink href="#jahorina" text="Jahorina" />
                     </ul>
                  </nav>
                  <div className="hamburger cursor-pointer flex flex-col gap-1" onClick={toggleMenu}>
                     <span
                        className={`bar block w-[45px] duration-200 h-[4px] bg-white  ${menuOpen ? 'rotate-45 translate-y-2 ' : ' block'}`}
                     ></span>
                     <span className={`bar block w-[45px] duration-200 h-[4px] bg-white ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                     <span
                        className={`bar block w-[45px] duration-200 h-[4px] bg-white ${menuOpen ? '-rotate-45 -translate-y-2 ' : ' block'}`}
                     ></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
