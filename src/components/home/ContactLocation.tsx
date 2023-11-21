import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { ContactItem, SocialIcon } from '../../layout/components';

export const ContactLocation = () => {
   const mapUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1032218.5822300719!2d17.281444896251998!3d44.38949482181121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758bf2ef3955c15%3A0x516975b702ebff5!2sVila%20Marina!5e0!3m2!1ssr!2sba!4v1676492744480!5m2!1ssr!2sba';

   return (
      <section className="py-10">
         <div className="container mx-auto px-2 lg:px-20">
            <main className="bg-sky-800 flex flex-col rounded-lg overflow-hidden lg:flex-row shadow-2xl">
               <div className="lg:flex-[2]">
                  <iframe
                     src={mapUrl}
                     title="Vila Marina|Vila Jelena"
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="w-full h-96 lg:h-[550px] border-0"
                  />
               </div>

               <div className="px-2 pt-10 pb-4 relative z-10 lg:flex-1 lg:pl-4">
                  <h3 className="text-center mb-5 text-4xl font-oleo text-cyan-500 md:text-5xl">Kontaktirajte nas</h3>

                  <div className="flex flex-col gap-2 relative z-10 lg:my-10 lg:gap-3">
                     <ContactItem icon={faHouse} href="https://apartmani-jahorina.com/">
                        Velika Dvorista, Jahorina 71423
                     </ContactItem>
                     <ContactItem icon={faPhone} href="tel:+38766126473">
                        Tel: +387 66 126 473
                     </ContactItem>
                     <ContactItem icon={faEnvelope} href="mailto:marina.velikadvorista@gmail.com">
                        marina.velikadvorista@gmail.com
                     </ContactItem>
                  </div>

                  <p className="text-white my-3 font-oleo text-4xl">Follow us</p>

                  <div className="flex items-center gap-2 text-3xl text-white md:text-4xl">
                     <SocialIcon href="facebook link" icon={faFacebook} className="text-cyan-500" />
                     <SocialIcon href="facebook link" icon={faInstagram} className="text-cyan-500" />
                  </div>

                  <div className="absolute h-72 w-72 md:h-96 md:w-96 border-[50px] border-solid border-cyan-400 opacity-60 rounded-full -right-[116px] top-32 lg:top-72" />
               </div>
            </main>
         </div>
      </section>
   );
};
