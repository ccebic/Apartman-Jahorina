import { Curve } from '../components/home/Curve';
import background from '../images/background4.webp';
import { Button } from '../components/home/Button';
import { AboutSectionJelena } from '../components/home/aboutJelena';

export const HomePage = () => {
   const HomeStyle = {
      backgroundImage: `url(${background})`,
   };

   const textShadow = {
      textShadow:
         '1px 1px 1px rgb(10, 81, 128), 1px 2px 1px rgb(10, 81, 128), 1px 3px 1px rgb(10, 81, 128), 1px 4px 1px rgb(10, 81, 128), 1px 5px 1px rgb(10, 81, 128), 1px 6px 1px rgb(10, 81, 128), 1px 7px 1px rgb(10, 81, 128), 1px 8px 1px rgb(10, 81, 128), 1px 9px 1px rgb(10, 81, 128), 1px 10px 1px rgb(10, 81, 128), 1px 18px 6px rgba(0, 0, 0, 0.329)',
   };

   const titleClass = 'relative text-6xl text-center md:text-7xl lg:text-9xl font-semibold';

   const decorationClass = 'absolute top-[50%] -translate-y-[50%] h-1 w-6 bg-cyan-500 shadow-md';

   const ReadMoreClass = 'uppercase text-cyan-500 absolute left-1/2 bottom-7 font-medium -translate-x-1/2';

   return (
      <div>
         <main className="relative bg-sky-500 h-screen bg-cover bg-center" style={HomeStyle}>
            <div className="absolute top-0 left-0 h-full w-full bg-black/[0.3]"></div>
            <div className="cointainer flex flex-col justify-center items-center h-[90vh]">
               <div className="relative">
                  <span className={`-left-[27px] ${decorationClass}`}></span>
                  <span className="text-xl md:text-3xl text-white font-bold">Welcome to our complex</span>
                  <span className={`-right-[27px] ${decorationClass}`}></span>
               </div>

               <div className={`${titleClass}`}>
                  <h1 className="flex flex-col font-oleo my-5 gap-4 text-cyan-500">
                     <span style={textShadow}>Villa Jelena</span>
                     <span style={textShadow}>Villa Marina</span>
                  </h1>
               </div>

               <div className="flex flex-col md:flex-row uppercase gap-4 items-center">
                  <Button text="book now" href="#" outline={false} decoration={true} />
                  <Button text="check the prices" href="#" outline={true} decoration={false} />
               </div>
            </div>

            <a href="#" className={`${ReadMoreClass}`}>
               read more
            </a>

            <Curve />
         </main>
         <AboutSectionJelena />
      </div>
   );
};
