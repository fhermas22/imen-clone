import HeroIllustration from "../../assets/images/illustrations/long.term.training/hero/it-programming.svg";
import TrainingIllustration from "../../assets/images/illustrations/long.term.training/it-programming.jpg";
import TrainingDetail from "../../components/ui/TrainingDetail";

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

            <div className="flex flex-row items-center justify-center py-14 px-50">
                {/*======== Section 2 : Training Main Details  ======== */}
                <section id="section2" className="flex flex-col items-center">
                    {/*==== Sub-Section : Training Illustration Image ====*/}
                    <img src={TrainingIllustration} alt="Image illustrant l'ambiance de la formation en Programmation Informatique" className="w-156 h-104 rounded-sm" />

                    {/*==== Sub-Section : Training Details ====*/}
                    <div className="flex flex-col py-10">
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

                {/*======== Section 3 : Side Box  ======== */}
                <section id="section3"></section>
            </div>
        </main>
    );
}

export default Training;