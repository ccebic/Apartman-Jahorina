interface ButtonProps {
   text: string;
   href: string;
}
export const ButtonA = ({ text, href }: ButtonProps) => {
   return (
      <a href={href} className="bg-cyan-500 hover:scale-110 duration-300 relative rounded-md  px-6 py-2 lg:py-3 text-white font-bold">
         {text}
         <span className="absolute h-3 w-[100%]  bottom-0 left-0 rounded-md lg:border-b-[6px] border-b-blue-600  border-b-[5px] "></span>
      </a>
   );
};

export const ButtonB = ({ text, href }: ButtonProps) => {
   return (
      <a
         href={href}
         className="border-2 hover:scale-110 duration-300 border-b-[7px] md:py-2 md:px-5   border-cyan-500 backdrop-blur-md  rounded-md px-3 py-2 text-white font-bold"
      >
         {text}
      </a>
   );
};
