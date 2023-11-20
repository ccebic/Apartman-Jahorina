import ReactDom from 'react-dom';

import VideoAbout from '../../video/vila-video.mp4';

export const ModalVideo = ({ open, onClose }: any) => {
   if (!open) return null;

   return ReactDom.createPortal(
      <main>
         <div className="fixed h-full w-full left-0 top-0 bg-black opacity-70 z-30" />
         <div className="h-[500px] w-1/2 bg-cyan-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-40">
            <button onClick={onClose} className="font-oleo ps-3 pt-3 text-2xl hover:text-white duration-100">
               Close
            </button>
            <video className="max-h-[92%]" width="100%" controls autoPlay>
               <source src={VideoAbout} type="video/mp4" />
            </video>
         </div>
      </main>,
      document.getElementById('portal') || document.body
   );
};
