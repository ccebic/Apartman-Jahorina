interface CircleProp {
   position: string;
}

export const Circle = ({ position }: CircleProp) => {
   return <div className={`absolute w-[670px] h-[670px] rounded-full border-[100px] border-solid border-cyan-500 z-[-1] ${position}`} />;
};
