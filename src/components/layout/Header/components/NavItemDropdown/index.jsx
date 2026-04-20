import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChevronDownPrimary from '../../../../../assets/images/icons/chevron-down-primary.svg';
import ChevronDownSecondary from '../../../../../assets/images/icons/chevron-down-secondary.svg';

const NavItemDropdown = ({ title, items}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Function for hover on desktop (>= 1024px)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) setIsSubMenuOpen(false);
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
        lg:absolute lg:top-full lg:left-0 lg:shadow-md lg:rounded-lg
        lg:py-2 lg:min-w-56 lg:mt-0 lg:pl-0 lg:bg-white 
        lg:opacity-100 lg:max-h-none lg:overflow-visible
        ${isSubMenuOpen ? 'lg:block' : 'lg:hidden'}
      `}> 
        {items.map((item, index) => (
          <li key={index}>
            {item.link === '#' ? (
              <span className="block py-1.5 text-sm text-primary cursor-default hover:text-primary! lg:px-4 lg:py-2 lg:hover:bg-transparent!">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.link} 
                className="block py-1.5 text-sm text-primary hover:text-secondary transition lg:px-4 lg:py-2 lg:hover:bg-gray-100"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItemDropdown;