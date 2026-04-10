import HeroIllustration from "../../assets/images/illustrations/long.term.training/hero/it-programming.svg";
import TrainingIllustration from "../../assets/images/illustrations/long.term.training/it-programming.jpg";
import Button from "../../components/common/Button";
import BoxDetail from "../../components/ui/BoxDetail";
import TrainingDetail from "../../components/ui/TrainingDetail";
import ImenPaymentTerms from "../../assets/documents/imen-payment-terms-2024.png";

function Training() {
    return (
        <main>
            {/*======== Section 1 : Title Hero  ======== */}
            <section id="section1" className="relative z-0 w-full h-56 overflow-hidden">
                {/*==== Sub-Section : Background Illustration Image ====*/}
                <img
                    src={HeroIllustration}
                    alt="Image minimaliste et stylisée illustrant la formation en Programmation Informatique"
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                    loading="eager"
                />

                {/*==== Sub-Section : Training Title ====*/}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-[32px] md:text-[40px] lg:text-[50px]">
                        Programmation Informatique
                    </h1>
                </div>
            </section>

            <div className="w-full flex flex-col gap-2 py-8 px-6 lg:flex-row lg:items-start lg:justify-center lg:py-14 lg:px-90">
                {/*======== Section 2 : Training Main Details  ======== */}
                <section id="section2" className="flex flex-col items-center">
                    {/*==== Sub-Section : Training Illustration Image ====*/}
                    <div className="w-full flex items-center justify-start mb-4 md:justify-center lg:justify-start">
                        <img 
                            src={TrainingIllustration} 
                            alt="Image illustrant l'ambiance de la formation en Programmation Informatique" 
                            width={626} 
                            height={417}
                            className="rounded-sm" />
                    </div>

                    {/*==== Sub-Section : Training Details ====*/}
                    <div className="flex flex-col py-6 md:py-8 lg:py-10">
                        <TrainingDetail
                            title="Présentation"
                            description="La filière Programmation Informatique forme des professionnels capables de concevoir, développer et optimiser des logiciels, applications web et mobiles ainsi que des systèmes informatiques. Elle couvre les langages de programmation essentiels (comme Python, Java, C++, et JavaScript), les principes d’algorithmique, et les méthodes de développement collaboratif. Grâce à cette formation, les étudiants acquièrent des compétences en analyse et en résolution de problèmes techniques, en respectant les standards de qualité et de sécurité. Cette filière répond aux besoins croissants du marché pour des développeurs polyvalents et spécialisés, indispensables dans tous les secteurs du numérique."
                            hasBottomBorder={true}
                        />
                        <TrainingDetail
                            title="Débouchés"
                            description="En choisissant ce parcours de formation, vous pouvez exercer plusieurs métiers dont entre autres : Développeur web ; Développeur d’applications mobiles; Développeur logiciel ; Ingénieur DevOps; Ingénieur système et réseaux ; Analyste programmeur; Consultant en technologie."
                            hasBottomBorder={true}
                        />
                        <TrainingDetail
                            title="Matériel requis"
                            description="Ordinateur portable ; Clé USB ou disque dur externe ; Rallonge Multi-prise"
                        />
                    </div>
                </section>

                {/*======== Section 3 : Side Details Box  ======== */}
                <section id="section3">
                    <div className="flex flex-col items-center justify-center py-10 px-6 border border-box-border rounded-sm lg:px-8">
                        {/*==== Sub-Section : Additional Details ====*/}
                        <div>
                            <BoxDetail
                                title="Durée de la formation"
                                value="2 ans"
                            />
                            <BoxDetail
                                title="Scolarité"
                                value="1 000 000 FCFA"
                            />
                            <BoxDetail
                                title="Prochaine Rentrée"
                                value="02 Mars 2026"
                                valueUppercase={false}
                            />
                        </div>

                        {/*==== Sub-Section : Action Buttons ====*/}
                        <div className="w-full flex flex-col items-center gap-4 mt-6">
                            <Button isPrimary={true} py={"py-2 xs:py-2.5 md:py-3"} textSize={"text-sm md:text-base"} hoverScale="hover:scale-106" className="w-full capitalize">
                                Devenir étudiant
                            </Button>
                            <Button isPrimary={true} isDownload={true} href={ImenPaymentTerms} py={"py-2 xs:py-2.5 md:py-3"} textSize={"text-sm md:text-base"} hoverScale="hover:scale-106" className="w-full capitalize">
                                Télécharger les modalités
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Training;