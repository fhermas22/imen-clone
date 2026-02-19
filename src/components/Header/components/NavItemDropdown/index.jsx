import { useState } from 'react';
import ChevronDownPrimary from '../../../../assets/images/icons/chevron-down-primary.svg';
import ChevronDownSecondary from '../../../../assets/images/icons/chevron-down-secondary.svg';

const NavItemDropdown = ({ title, items }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <li 
      className="relative group"
      // On desktop : open on hover
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
    >
      <button 
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} // On mobile : open on click
        className="flex items-center gap-1 text-primary font-title font-medium hover:text-secondary transition duration-300 w-full text-left"
      >
        {title}
        <img src={isSubMenuOpen ? ChevronDownSecondary : ChevronDownPrimary} alt="Icône flèche bas" className={`transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`} width={10} height={10} />
      </button>

      {/* Dropdown Menu */}
      <ul className={`
        ${isSubMenuOpen ? 'block' : 'hidden'} 
        md:absolute md:top-full md:left-0 md:bg-white md:shadow-md md:rounded-md md:py-2 md:min-w-50
        pl-4 md:pl-0 mt-2 md:mt-0
      `}>
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href={item.link} 
              className="block px-4 py-2 text-sm text-primary hover:bg-gray-100 hover:text-secondary transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItemDropdown;