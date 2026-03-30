import LogoDark from "../../../assets/images/logo/imen_logo_dark.png";

function Footer() {
    return (
        <footer className="w-full pt-25 pb-10 bg-footer">
            <div className="flex flex-col items-center justify-center gap-30 lg:flex-row">
                {/* Logo */}
                <img src={LogoDark} alt="Logo de l'IMeN" className="w-60"/>

                {/* Newsletter */}
                <div className="flex flex-col items-start">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Newsletter</h3>
                    <p className="font-body text-black text-base my-6">
                        Restez en contact avec nous.
                    </p>
                    <div className="">
                        <input type="email" name="email" placeholder="Entrez votre adresse email" className="pl-6 pr-20 py-4 text-sm border-2 border-input"/>
                    </div>
                </div>

                {/* Contact Us */}
                <div></div>
            </div>
        </footer>
    );
}

export default Footer;