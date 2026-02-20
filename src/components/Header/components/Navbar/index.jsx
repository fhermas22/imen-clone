import { useState } from "react";
import MenuBlack from "../../../../assets/images/icons/menu-black.svg";
import CloseBlack from "../../../../assets/images/icons/close-black.svg";
import NavItemDropdown from "../NavItemDropdown";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="relative z-50 flex justify-around items-center w-[80%] mx-auto shadow-md">
            {/* Logo */}
            <div>
                <img className="w-40" src="src/assets/images/logo/imen_logo.png" alt="Logo de l'IMeN" />
            </div>

            {/* Menu Options */}
            <div className={`
                absolute md:static bg-white left-0 -top-full md:w-auto w-full mt-[10vh] md:mt-0 
                flex flex-col md:flex-row items-start md:items-center pb-6 px-5 md:pt-6 
                ${isOpen ? "top-0" : ""} 
                transition-all duration-500
                max-h-[92vh] overflow-y-auto md:overflow-visible
            `}>
                <ul className="flex flex-col md:flex-row md:items-center md:gap-[3vw] gap-8">
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
            <div className="flex items-center bg-primary rounded-md px-3 py-2 md:hidden">
                <img src={isOpen ? CloseBlack : MenuBlack} onClick={toggleMenu} className="cursor-pointer" alt="Icône du menu" width="20" height="20" />
            </div>
        </nav>
    )
}

export default Navbar