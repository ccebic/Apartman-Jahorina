import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialIcons = {
   href: string;
   icon?: any;
   text?: string;
   extraClasses?: string;
};

export const SocialIcon: React.FC<SocialIcons> = ({ href, icon, text, extraClasses }) => (
   <li className="footer-link-item hover:-translate-y-2 text-white hover:text-white duration-200">
      <a href={href} className={`${extraClasses}`}>
         <FontAwesomeIcon icon={icon} className=" w-10 h-10" />
         {text}
      </a>
   </li>
);
