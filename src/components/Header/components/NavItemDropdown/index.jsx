import { useState } from 'react';
import ChevronDownPrimary from '../../../../assets/images/icons/chevron-down-primary.svg';
import ChevronDownSecondary from '../../../../assets/images/icons/chevron-down-secondary.svg';

const NavItemDropdown = ({ title, items }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Function for hover on desktop (>= 768px)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setIsSubMenuOpen(false);
  };

  // Function for click on mobile (< 768px)
  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        onClick={toggleMenu}
        className="flex items-center gap-1 text-primary font-title font-medium hover:text-secondary transition duration-300 w-full text-left"
      >
        {title}
        <img 
          src={isSubMenuOpen ? ChevronDownSecondary : ChevronDownPrimary} 
          alt="Icône flèche bas" 
          className={`transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`} 
          width={10} 
          height={10} 
        />
      </button>

      {/* Dropdown Menu */}
      <ul className={`
        /* --- MOBILE (accordion logic) --- */
        ${isSubMenuOpen ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0'} 
        overflow-hidden transition-all duration-500 ease-in-out
        pl-6

        /* --- DESKTOP (reset and positioning) --- */
        md:absolute md:top-full md:left-0 md:bg-white md:shadow-md md:rounded-md 
        md:py-2 md:min-w-56 md:mt-0 md:pl-0
        md:opacity-100 md:max-h-none md:overflow-visible
        ${isSubMenuOpen ? 'md:block' : 'md:hidden'}
      `}> 
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href={item.link} 
              className="block py-1.5 md:px-4 md:py-2 text-sm text-primary hover:text-secondary md:hover:bg-gray-100 transition"
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