import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

type LinkProp = {
   href: string;
   text: string;
};

export const FooterLink = ({ href, text }: LinkProp) => (
   <li>
      <a href={href} className="footer-link-item text-cyan-500 hover:rounded-md duration-200 py-2 px-3 border-2 border-cyan-500">
         {text}
      </a>
   </li>
);

export const NavHeaderLink: React.FC<LinkProp> = ({ href, text }) => (
   <li className="nav-item">
      <a className="nav-link flex group items-center gap-3 relative font-medium tracking-[4px]" href={href}>
         <div className="absolute h-1 left-0 -bottom-1 duration-300 group-hover:w-full w-0 bg-blue-900" />
         <FontAwesomeIcon icon={faMountainSun} className="text-blue-900" />
         {text}
      </a>
   </li>
);
