import { useState, useEffect } from "react";
import Logo from "../../../../../assets/images/logo/imen_logo.png";
import MenuWhite from "../../../../../assets/images/icons/menu-white.svg";
import CloseWhite from "../../../../../assets/images/icons/close-white.svg";
import NavItemDropdown from "../NavItemDropdown";
import { Link } from "react-router-dom";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 1. Toggle Mobile Menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // 2. Scroll Detection for Navbar Shadow
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
        fixed z-50 top-0 left-0 flex justify-center items-center w-screen h-20 mx-auto transition-all duration-500
        ${isScrolled 
            ? "bg-white/94 backdrop-blur-md shadow-md border-b border-white/20" 
            : "bg-white shadow-xs"}
        `}>
            {/* Logo */}
            <div>
                <Link to="/">
                    <img className="w-40 mr-[30vw] md:mr-[60vw] lg:mr-10" src={Logo} alt="Logo de l'IMeN" />
                </Link>
            </div>

            {/* Menu Options */}
            <div className={`
                /*--- Mobile Properties ---*/
                absolute left-0 w-full shadow-lg z-[-2]
                flex flex-col items-start pt-4 pb-6 px-5
                
                /* Transition Pro */
                transition-all duration-500 ease-in-out
                
                /* Menu Opening Logic */
                ${isOpen 
                    ? "top-full opacity-100 translate-y-0" 
                    : "top-0 opacity-0 -translate-y-10 pointer-events-none"} 

                /*--- Scroll Management ---*/
                ${isScrolled ? "bg-white/94 lg:bg-transparent" : "bg-white"}

                /*--- Desktop Properties ---*/
                lg:static lg:w-auto lg:flex-row lg:shadow-none lg:items-center 
                lg:pt-0 lg:pb-0 lg:z-auto lg:top-0 lg:opacity-100 
                lg:translate-y-0 lg:pointer-events-auto 
                
                /*--- Scroll Management ---*/
                max-h-[90vh] overflow-y-auto lg:overflow-visible
            `}>
                <ul className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[2vw]">
                    <li>
                        <Link className="text-primary font-title font-medium hover:text-secondary transition duration-300" to="/">Accueil</Link>
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
                            { label: "Département Numérique", link: "/department/numerique" },
                            { label: "Département Design", link: "/department/design" },
                            { label: "Formations Continues", link: "/department/continuing-education" },
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