interface ButtonProps {
   href: string;
   outline: boolean;
   children: string;
   decoration: boolean;
}

export const Button = ({ children, href, outline, decoration }: ButtonProps) => {
   const buttonDecoration = 'absolute h-3 w-full bottom-0 left-0 rounded-md border-b-sky-800 border-b-[5px]';
   const buttonOutline = 'border-2 border-b-[7px] md:py-2 md:px-5 border-cyan-500 backdrop-blur-md px-3 ';

   const button = 'hover:scale-110 duration-300 rounded-md py-2 text-white font-bold';
   const buttonFill = 'bg-cyan-500 relative px-6 lg:py-3';

   return (
      <a href={href} className={`${outline === false ? buttonFill : buttonOutline} ${button}`}>
         {children}
         {decoration && <span className={buttonDecoration} />}
      </a>
   );
};
