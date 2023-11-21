import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContactItemProp {
   icon: any;
   href: string;
   children: string;
}

export const ContactItem = ({ icon, href, children }: ContactItemProp) => {
   return (
      <div className="flex gap-1 items-center">
         <FontAwesomeIcon icon={icon} className="text-cyan-500 text-xl md:text-2xl" />
         <a href={href} className="text-white md:text-lg">
            {children}
         </a>
      </div>
   );
};
