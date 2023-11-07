import curve from '../../images/rotten-curve-5.png';

export const Curve = () => {
   const CurveStyle = {
      backgroundImage: `url(${curve})`,
   };
   return <div className="absolute w-full h-8 bottom-0 left-0 bg-cover bg-center bg-no-repeat" style={CurveStyle}></div>;
};
