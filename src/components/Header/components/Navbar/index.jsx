function Navbar() {
  return (
    <nav className="flex justify-around items-center w-[90%] mx-auto">
        {/* Logo */}
        <div>
            <img className="w-40" src="src/assets/images/logo/imen_logo.png" alt="Logo de l'IMeN" />
        </div>

        {/* Menu Options */}
        <div className="absolute md:static bg-white md:min-h-fit min-h-[60vh] left-0 -top-full md:w-auto w-full flex items-center px-5">
            <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8">
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Accueil</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Découvrir l'IMeN</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Nos Formations</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Nos Programmes</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Actualités</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Contact</a>
                </li>
                <li>
                    <a className="text-primary font-title font-medium hover:text-secondary" href="#">Portfolio Étudiants</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar