import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialIcons {
   href: string;
   icon?: any;
   text?: string;
   className?: string;
}

export const SocialIcon = ({ href, icon, text, className }: SocialIcons) => (
   <li className="footer-link-item hover:-translate-y-2 text-white hover:text-white duration-200">
      <a href={href} className={`${className}`}>
         <FontAwesomeIcon icon={icon} className=" w-10 h-10" />
         {text}
      </a>
   </li>
);
