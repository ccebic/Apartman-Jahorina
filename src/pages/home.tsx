import { AboutSectionJelena } from '../components/home/aboutJelena';
import background from '../images/background4.webp';
import curve from '../images/rotten-curve-5.png';

export const HomePage = () => {
   const CurveStyle = {
      backgroundImage: `url(${curve})`,
   };
   const HomeStyle = {
      backgroundImage: `url(${background})`,
   };
   const textShadow = {
      textShadow:
         '1px 1px 1px rgb(10, 81, 128), 1px 2px 1px rgb(10, 81, 128), 1px 3px 1px rgb(10, 81, 128), 1px 4px 1px rgb(10, 81, 128), 1px 5px 1px rgb(10, 81, 128), 1px 6px 1px rgb(10, 81, 128), 1px 7px 1px rgb(10, 81, 128), 1px 8px 1px rgb(10, 81, 128), 1px 9px 1px rgb(10, 81, 128), 1px 10px 1px rgb(10, 81, 128), 1px 18px 6px rgba(0, 0, 0, 0.329)',
   };

   return (
      <div>
         <div className="relative content bg-sky-500 h-screen bg-cover bg-center" style={HomeStyle}>
            <div className="absolute top-0 left-0 h-full w-full bg-black/[0.3]"></div>
            <div className="cointainer flex flex-col justify-center items-center h-[90vh]">
               <div className="upper-text relative">
                  <span className="absolute -left-[27px] top-[50%] -translate-y-[50%] h-1 w-6 bg-cyan-500 shadow-md"></span>
                  <span className="text-xl md:text-3xl text-white font-bold">Welcome to our complex</span>
                  <span className="absolute -right-[27px] top-[50%] -translate-y-[50%] h-1 w-6 bg-cyan-500 shadow-md"></span>
               </div>
               <div className="title relative text-6xl text-center md:text-7xl lg:text-9xl font-semibold">
                  <h1 className="flex flex-col font-oleo my-5 gap-4 text-cyan-500">
                     <span style={textShadow}>Villa Jelena</span>
                     <span style={textShadow}>Villa Marina</span>
                  </h1>
               </div>
               <div className="btn-group flex flex-col md:flex-row uppercase gap-4 items-center">
                  <a
                     href="#"
                     className="bg-cyan-500 hover:scale-110 duration-300 relative rounded-md  px-6 py-2 lg:py-3 text-white font-bold"
                  >
                     Book now
                     <span className="absolute h-3 w-[100%]  bottom-0 left-0 rounded-md lg:border-b-[6px] border-b-blue-600  border-b-[5px] "></span>
                  </a>
                  <a
                     href="#"
                     className="border-2 hover:scale-110 duration-300 border-b-[7px] md:py-2 md:px-5   border-cyan-500 backdrop-blur-md  rounded-md px-3 py-2 text-white font-bold"
                  >
                     check the prices
                  </a>
               </div>
            </div>
            <div className="absolute w-full h-8 bottom-0 left-0 bg-cover bg-center bg-no-repeat" style={CurveStyle}></div>
            <a href="#" className="uppercase text-cyan-500 absolute left-1/2 bottom-7 font-medium -translate-x-1/2">
               read more
            </a>
         </div>
         <AboutSectionJelena />
      </div>
   );
};

// this commit will
