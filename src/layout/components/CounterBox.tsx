import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type CounterBoxProps = {
   icon: any;
   text: string;
   units?: string;
   children?: React.ReactNode;
};

export const CounterBox: React.FC<CounterBoxProps> = ({ icon, text, units = 'km', children }) => {
   return (
      <div className="box flex flex-col text-white items-center justify-center gap-2 px-1 bg-sky-950 w-[200px] h-[110px] rounded-lg border-b-8 border-cyan-500">
         <FontAwesomeIcon icon={icon} className="text-cyan-500 text-2xl" />
         <span className="text-lg font-oleo justify-center">
            {children}+<span className="pl-1">{units}</span>
         </span>
         <p className="text-md">{text}</p>
      </div>
   );
};
