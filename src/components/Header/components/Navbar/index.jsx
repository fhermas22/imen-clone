import { useState } from "react";
import Logo from "../../../../assets/images/logo/imen_logo.png";
import MenuWhite from "../../../../assets/images/icons/menu-white.svg";
import CloseWhite from "../../../../assets/images/icons/close-white.svg";
import NavItemDropdown from "../NavItemDropdown";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="relative z-50 flex justify-center items-center w-full mx-auto shadow-md">
            {/* Logo */}
            <div>
                <img className="w-40 mr-[30vw] md:mr-[60vw] lg:mr-10" src={Logo} alt="Logo de l'IMeN" />
            </div>

            {/* Menu Options */}
            <div className={`
                /*--- Mobile Properties ---*/
                absolute left-0 w-full bg-white shadow-lg z-[-2]
                flex flex-col items-start pb-6 px-5 
                
                /* Transition Pro */
                transition-all duration-500 ease-in-out
                
                /* Menu Opening Logic */
                ${isOpen 
                    ? "top-full opacity-100 translate-y-0" 
                    : "top-0 opacity-0 -translate-y-10 pointer-events-none"} 

                /*--- Desktop Properties ---*/
                lg:static lg:w-auto lg:flex-row lg:shadow-none lg:items-center 
                lg:pt-0 lg:pb-0 lg:z-auto lg:top-0 lg:opacity-100 
                lg:translate-y-0 lg:pointer-events-auto
                
                /*--- Scroll Management ---*/
                max-h-[90vh] overflow-y-auto lg:overflow-visible
            `}>
                <ul className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[2vw]">
                    <li>
                        <a className="text-primary font-title font-medium hover:text-secondary transition duration-300" href="#">Accueil</a>
                    </li>

                    {/* Dropdown : Discover IMeN */}
                    <NavItemDropdown 
                        title="Découvrir l'IMeN" 
                        items={[
                            { label: "L'école", link: "#" },
                            { label: "Notre vision", link: "#" },
                            { label: "Notre réseau", link: "#" },
                            { label: "Le parcours de certification", link: "#" },
                        ]} 
                    />

                    {/* Dropdown : Our Training Courses */}
                    <NavItemDropdown 
                        title="Nos Formations" 
                        items={[
                            { label: "Département Numérique", link: "#" },
                            { label: "Département Design", link: "#" },
                            { label: "Département Audiovisuel", link: "#" },
                            { label: "Formations Continues", link: "#" },
                            { label: "Workshops & Ateliers", link: "#" },
                        ]} 
                    />

                    <li>
                        <a className="text-primary font-title font-medium hover:text-secondary transition duration-300" href="#">Nos Programmes</a>
                    </li>

                    {/* Dropdown : News */}
                    <NavItemDropdown 
                        title="Actualités" 
                        items={[
                            { label: "Blog", link: "#" },
                            { label: "Évènements", link: "#" },
                            { label: "Recrutements", link: "#" },
                        ]} 
                    />

                    <li>
                        <a className="text-primary font-title font-medium hover:text-secondary transition duration-300" href="#">Contact</a>
                    </li>
                    <li>
                        <a className="text-primary font-title font-medium hover:text-secondary transition duration-300" href="#">Portfolio Étudiants</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center bg-primary rounded-md px-3 py-2 lg:hidden">
                <img src={isOpen ? CloseWhite : MenuWhite} onClick={toggleMenu} className="cursor-pointer" alt="Icône du menu" width="20" height="20" />
            </div>
        </nav>
    )
}

export default Navbar