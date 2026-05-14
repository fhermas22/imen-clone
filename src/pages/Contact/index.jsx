{/*== Component Imports  == */}
import Hero from "../../components/common/Hero/index.jsx";
import InputField from "../../components/common/InputField/index.jsx";
import Button from "../../components/common/Button/index.jsx";
import ContactDetail from "../../components/ui/ContactDetail/index.jsx";
{/*== Icon Imports  == */}
import BuildingPrimary from "../../assets/images/icons/building-primary.svg";
import PhoneOutgoingPrimary from "../../assets/images/icons/phone-outgoing-primary.svg";
import MailPrimary from "../../assets/images/icons/mail-primary.svg";
{/*== Illustration Imports  == */}
import ContactHero from "../../assets/images/illustrations/hero/contact-hero.svg";

function Contact() {
    return (
        <main>
            {/*======== Section 1 : Hero ======== */}
            <Hero
                sectionId="section1"
                title="Contactez-Nous"
                imgSrc={ContactHero}
                imgPositionY="center 10%"
            />

            <div className="w-full flex flex-col py-8 px-3 md:px-8 lg:py-14 lg:px-[10vw] xl:gap-2 xl:px-[22vw]">
                {/*==== Sub-Section : Title ====*/}
                <h2 className="font-title text-primary text-2xl font-semibold md:text-3xl">
                    Avez-vous une préoccupation ? Ecrivez-nous un message.
                </h2>

                <div className="flex flex-col gap-10 pt-6 lg:flex-row">
                    {/*======== Section 2 : Contact Form ======== */}
                    <section id="section2" className="flex flex-col items-start">
                        {/*==== Sub-Section : Form Fields ====*/}
                        <form action="" className="flex flex-col gap-6">
                            <InputField 
                                type="textarea"
                                name="message"
                                id="message"
                                placeholder="Entrez votre message"
                                cols={30}
                                rows={9}
                                width="w-[90vw] lg:w-[34vw]"
                            />
                            <div className="flex flex-col gap-6 md:flex-row">
                                <InputField 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Entrez votre nom"
                                />
                                <InputField 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Entrez votre adresse email"
                                />
                            </div>
                            <InputField 
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Entrez l'object de votre message"
                            />
                            {/*==== Sub-Section : Submit Button ====*/}
                            <Button isPrimary={true} type="submit" py="py-2 xs:py-2.5 md:py-3" rounded="rounded-sm" hoverScale="hover:scale-104" className="self-start lg:mt-2">
                                Envoyer
                            </Button>
                        </form>
                    </section>

                    {/*======== Section 3 : Contact Informations ======== */}
                    <section id="section3" className="flex flex-col items-start gap-6 py-4 lg:py-0">
                        <ContactDetail
                            icon={BuildingPrimary}
                            iconAlt="Icone de building"
                            title="Rendez-vous dans nos locaux"
                            description="Bénin, Cotonou, Vedoko, BP 1250"
                            href="https://maps.app.goo.gl/7Mp5ZXMZme7dCzrT7?g_st=aw"
                            descriptionIsClickable={true}
                        />
                        <ContactDetail
                            icon={PhoneOutgoingPrimary}
                            iconAlt="Icone de téléphone"
                            title="+229 01 95 92 23 45"
                            description="Lundi au Vendredi 8h à 18h"
                            href="tel:+2290195922345"
                            titleIsClickable={true}
                        />
                        <ContactDetail
                            icon={MailPrimary}
                            iconAlt="Icone d'e-mail"
                            title="info@imen.school"
                            description="Envoyez-nous un mail."
                            href="mailto:info@imen.school"
                            titleIsClickable={true}
                        />
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Contact;