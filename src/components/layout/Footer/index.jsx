import LogoDark from "../../../assets/images/logo/imen_logo_dark.png";
import ChevronRightWhite from "../../../assets/images/icons/chevron-right-white.svg";

function Footer() {
    return (
        <footer className="w-full pt-25 pb-10 bg-footer">
            <div className="flex flex-col items-center justify-center gap-30 lg:flex-row">
                {/* Logo */}
                <img src={LogoDark} alt="Logo de l'IMeN" className="w-60"/>

                {/* Newsletter */}
                <div className="flex flex-col items-start">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Newsletter</h3>
                    <p className="font-body text-black text-sm my-6">
                        Restez en contact avec nous.
                    </p>
                    <div className="flex justify-between gap-4 pl-6 pr-2 py-2 border border-input rounded-sm focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2">
                        <input type="email" name="email" id="email" placeholder="Entrez votre adresse email" className="w-64 text-input-text text-xs border-none focus:outline-none"/>
                        <button type="submit" className="w-10 h-10 flex items-center justify-center bg-primary rounded-sm transition duration-500 ease-in-out hover:cursor-pointer active:scale-90">
                            <img src={ChevronRightWhite} alt="Soumettre" width={30} height={30}/>
                        </button>
                    </div>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col items-start">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Contactez-nous</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;