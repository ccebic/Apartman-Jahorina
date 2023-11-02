type BoxAboutProp = {
   text: string;
};

export const BoxesAbout = () => {
   return (
      <div className="boxes flex gap-2 align-middle uppercase self-center flex-wrap">
         <BoxAbout text="wi-fi" />
         <BoxAbout text="parking" />
         <BoxAbout text="ac" />
         <BoxAbout text="bathroom" />
         <BoxAbout text="balcony" />
         <BoxAbout text="tv" />
      </div>
   );
};

export const BoxAbout: React.FC<BoxAboutProp> = ({ text }) => (
   <span className="p-1 border border-sky-800 cursor-pointer duration-300 font-medium hover:bg-sky-800/[0.6]">{text}</span>
);
