{/*== Component Imports  == */}
import SocialLink from "./components/SocialLink";
{/*== Icons Imports  == */}
import LogoDark from "../../../assets/images/logo/imen_logo_dark.png";
import ChevronRightWhite from "../../../assets/images/icons/chevron-right-white.svg";
import LocationPrimary from "../../../assets/images/icons/location-primary.svg";
import PhoneNumberPrimary from "../../../assets/images/icons/phone-number-primary.svg";
import EmailPrimary from "../../../assets/images/icons/email-primary.svg";
import FacebookPrimary from "../../../assets/images/icons/facebook-primary.svg";
import FacebookSecondary from "../../../assets/images/icons/facebook-secondary.svg";
import InstagramCirclePrimary from "../../../assets/images/icons/instagram-circle-primary.svg";
import InstagramCircleSecondary from "../../../assets/images/icons/instagram-circle-secondary.svg";
import TwitterXPrimary from "../../../assets/images/icons/twitter-x-primary.svg";
import TwitterXSecondary from "../../../assets/images/icons/twitter-x-secondary.svg";
import LinkedinPrimary from "../../../assets/images/icons/linkedin-primary.svg";
import LinkedinSecondary from "../../../assets/images/icons/linkedin-secondary.svg";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full flex flex-col pt-25 bg-footer">
            <div className="flex flex-col items-center justify-center gap-40 mb-12 lg:flex-row lg:items-start">
                {/* Logo */}
                <img src={LogoDark} alt="Logo de l'IMeN" className="w-62"/>

                {/* Newsletter */}
                <div className="flex flex-col items-start">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Newsletter</h3>

                    <p className="font-body text-black text-sm my-6">
                        Restez en contact avec nous.
                    </p>

                    <div className="flex justify-between gap-4 pl-6 pr-2 py-2 border border-input rounded-sm focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2">
                        <input type="email" name="email" id="email" placeholder="Entrez votre adresse email" className="w-64 font-body text-input-text text-xs bg-transparent border-none focus:outline-none focus:text-slate-800"/>
                        <button type="submit" className="w-10 h-10 flex items-center justify-center bg-primary rounded-sm transition duration-500 ease-in-out hover:cursor-pointer active:scale-90">
                            <img src={ChevronRightWhite} alt="Soumettre" width={30} height={30}/>
                        </button>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 py-6">
                        <SocialLink
                            href="https://www.facebook.com/imenbenin"
                            iconPrimary={FacebookPrimary}
                            iconSecondary={FacebookSecondary}
                            alt="Lien de notre page Facebook"
                        />
                        <SocialLink
                            href="https://www.instagram.com/imenbenin"
                            iconPrimary={InstagramCirclePrimary}
                            iconSecondary={InstagramCircleSecondary}
                            alt="Lien de notre page Instagram"
                        />
                        <SocialLink
                            href="https://www.twitter.com/imenbenin"
                            iconPrimary={TwitterXPrimary}
                            iconSecondary={TwitterXSecondary}
                            alt="Lien de notre page Twitter"
                        /> 
                        <SocialLink
                            href="https://www.linkedin.com/company/imenbenin"
                            iconPrimary={LinkedinPrimary}
                            iconSecondary={LinkedinSecondary}
                            alt="Lien de notre page Linkedin"
                            size={"w-6.5 h-6.5"}
                        />                    
                    </div>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col items-start">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Contactez-nous</h3>

                    <div className="flex flex-col gap-4 my-6">
                        <span className="flex items-center justify-items-start gap-2">
                            <img src={LocationPrimary} alt="Icône d'adresse" width={26} height={26}/>
                            <p className="font-body text-primary text-sm font-medium">
                                Adresse :
                            </p>
                            <a href="https://share.google/jI4xVsooBskwFc7iA" target="_blank" rel="noopener noreferrer" className="font-body text-black text-sm">
                                Bénin, Cotonou, Vedoko, BP 1250
                            </a>
                        </span>
                        <span className="flex items-center justify-items-start gap-2">
                            <img src={PhoneNumberPrimary} alt="Icône de téléphone" width={26} height={26}/>
                            <p className="font-body text-primary text-sm font-medium">
                                Téléphone :
                            </p>
                            <a href="tel:+2290195922345" className="font-body text-black text-sm">
                                +229 01 95 92 23 45
                            </a>
                        </span>
                        <span className="flex items-center jub-10stify-items-start gap-2">
                            <img src={EmailPrimary} alt="Icône d'email" width={26} height={26}/>
                            <p className="font-body text-primary text-sm font-medium">
                                Email :
                            </p>
                            <a href="mailto:info@imen.school" className="font-body text-black text-sm">
                                info@imen.school
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center py-6 border-t border-footer-border">
                <p className="font-body text-black text-sm">
                    Copyright IMeN © {currentYear} | Tout droits réservés.
                </p>
            </div>
        </footer>
    );
}

export default Footer;