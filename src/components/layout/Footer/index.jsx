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
        <footer className="w-full flex flex-col pt-15 bg-footer lg:pt-25">
            <div className="flex flex-col items-center justify-center gap-14 px-3 mb-12 md:gap-10 md:flex-row md:items-start lg:gap-40">
                {/* Logo */}
                <div className="flex flex-row items-center justify-center">
                    <img src={LogoDark} alt="Logo de l'IMeN" className="w-62 md:w-48 lg:w-62"/>
                </div>

                {/* Newsletter */}
                <div className="w-[90vw] flex flex-col items-start md:w-max">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Newsletter</h3>

                    <p className="font-body text-black text-sm mt-2 mb-4 lg:my-6">
                        Restez en contact avec nous.
                    </p>

                    <div className="flex justify-between gap-4 pl-6 pr-2 py-2 border border-input rounded-sm focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2">
                        <input 
                            type="email" name="email" id="email" 
                            placeholder="Entrez votre adresse email" 
                            className="w-[60vw] font-body text-input-text text-xs bg-transparent border-none focus:outline-none focus:text-slate-800 xs:w-[65vw] md:w-[14vw] lg:w-[14vw]"
                        />
                        <button type="submit" className="w-10 h-10 flex items-center justify-center bg-primary rounded-sm transition duration-500 ease-in-out hover:bg-secondary hover:cursor-pointer active:scale-90">
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
                <div className="w-[90vw] flex flex-col items-start md:w-max">
                    <h3 className="font-title text-primary text-lg font-bold text-center md:text-xl lg:text-2xl">Contactez-nous</h3>

                    <div className="flex flex-col gap-4 my-4 lg:my-6">
                        <span className="flex items-center justify-items-start gap-2">
                            <img src={LocationPrimary} alt="Icône d'adresse" className="w-6.5 h-6.5 md:w-5 md:h-5 lg:w-6.5 lg:h-6.5" />
                            <p className="font-body text-primary text-sm font-medium md:text-xs lg:text-sm">
                                Adresse :
                            </p>
                            <a href="https://maps.app.goo.gl/7Mp5ZXMZme7dCzrT7?g_st=aw" target="_blank" rel="noopener noreferrer" className="font-body text-black text-xs xs:text-sm md:text-xs lg:text-sm">
                                Bénin, Cotonou, Vedoko, BP 1250
                            </a>
                        </span>
                        <span className="flex items-center justify-items-start gap-2">
                            <img src={PhoneNumberPrimary} alt="Icône de téléphone" className="w-6.5 h-6.5 md:w-5 md:h-5 lg:w-6.5 lg:h-6.5" />
                            <p className="font-body text-primary text-sm font-medium md:text-xs lg:text-sm">
                                Téléphone :
                            </p>
                            <a href="tel:+2290195922345" className="font-body text-black text-xs xs:text-sm md:text-xs lg:text-sm">
                                +229 01 95 92 23 45
                            </a>
                        </span>
                        <span className="flex items-center jub-10stify-items-start gap-2">
                            <img src={EmailPrimary} alt="Icône d'email" className="w-6.5 h-6.5 md:w-5 md:h-5 lg:w-6.5 lg:h-6.5" />
                            <p className="font-body text-primary text-sm font-medium md:text-xs lg:text-sm">
                                Email :
                            </p>
                            <a href="mailto:info@imen.school" className="font-body text-black text-xs xs:text-sm md:text-xs lg:text-sm">
                                info@imen.school
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center py-7 border-t border-footer-border lg:py-6">
                <p className="font-body text-black text-xs lg:text-sm">
                    Copyright IMeN © {currentYear} | Tout droits réservés.
                </p>
            </div>
        </footer>
    );
}

export default Footer;