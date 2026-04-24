import { useParams } from "react-router-dom";

{/*== Component Imports  == */}
import Button from "../../components/common/Button";
import BoxDetail from "../../components/ui/BoxDetail";
import TrainingDetail from "../../components/ui/TrainingDetail";
import ErrorNotFound from "../../components/common/ErrorNotFound/index.jsx";
{/*== Illustration & Docs Imports  == */}
import HeroIllustration from "../../assets/images/illustrations/trainings/long.term.training/hero/long-term-training-hero.svg";
import ImenPaymentTerms from "../../assets/documents/imen-payment-terms-2024.png";
{/*== Icons Imports  == */}
import PageNotFoundPrimary from "../../assets/images/icons/page-not-found-primary.svg";
{/*== Data Imports  == */}
import { trainingList } from "../../datas/trainingList";

function Training() {
    // Get the training ID from the URL parameters
    const { id } = useParams();
    
    // Find the training in the training list based on the ID
    const training = trainingList.find((f) => f.id === parseInt(id));

    // If no training is found with the given ID, display the error component
    if (!training) {
        return (
            <ErrorNotFound 
                title="404"
                subtitle="Formation non trouvée"
                description="La formation demandée n'existe pas."
                redirectTo="/"
                redirectText="Retour à l'accueil"
                iconSrc={PageNotFoundPrimary}
                iconSize="w-80 h-80"
                iconMarginBottom="mb-1 xs:mb-2 md:mb-3"
                countdown={5}
            />
        );
    }

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
                        {training.title}
                    </h1>
                </div>
            </section>

            <div className="w-full flex flex-col gap-2 py-8 px-6 lg:flex-row lg:items-start lg:justify-center lg:gap-10 lg:py-14 lg:px-[10vw] xl:gap-2 xl:px-[20vw]">
                {/*======== Section 2 : Training Main Details  ======== */}
                <section id="section2" className="flex flex-col items-center">
                    {/*==== Sub-Section : Training Illustration Image ====*/}
                    <div className="w-full flex items-center justify-start mb-4 md:justify-center lg:justify-start">
                        <img 
                            src={training.illustration} 
                            alt="Image illustrant l'ambiance de la formation en Programmation Informatique" 
                            width={626} 
                            height={417}
                            className="rounded-sm" />
                    </div>

                    {/*==== Sub-Section : Training Details ====*/}
                    <div className="flex flex-col pt-6 md:pt-8 lg:pt-10">
                        <TrainingDetail
                            title="Présentation"
                            description={training.presentation}
                            hasBottomBorder={true}
                        />
                        {training.goals && (
                            <TrainingDetail
                                title="Objectifs de la formation"
                                subDetails={training.goals}
                                hasBottomBorder={true}
                                isGoal={true}
                            />
                        )}
                        <TrainingDetail
                            title={training.departement == null ? "Débouchés et Compétences Acquises" : "Débouchés"}
                            description={training.departement != null ? "En choisissant ce parcours de formation, vous pouvez exercer plusieurs métiers dont entre autres :" : "À l’issue de la formation, les participants seront en mesure de :"}
                            subDetails={training.openings}
                            isOpening={true}
                            hasBottomBorder={true}
                        />
                        {training.target_audience && (
                            <TrainingDetail
                                title="Public Cible"
                                description={training.target_audience}
                                hasBottomBorder={true}
                            />
                        )}
                        <TrainingDetail
                            title="Matériel requis"
                            subDetails={training.materials}
                            isMaterial={true}
                            hasBottomBorder={training.preview ? true : false}
                        />
                        {training.preview && (
                            <TrainingDetail
                                title="Aperçu de la formation"
                                description={training.preview}
                            />
                        )}
                    </div>
                </section>

                {/*======== Section 3 : Side Details Box  ======== */}
                <section id="section3">
                    <div className="flex flex-col items-center justify-center py-10 px-6 border border-box-border rounded-sm lg:px-8">
                        {/*==== Sub-Section : Additional Details ====*/}
                        <div>
                            <BoxDetail
                                title="Durée de la formation"
                                value={training.duration}
                            />
                            <BoxDetail
                                title="Scolarité"
                                value={training.cost}
                            />
                            <BoxDetail
                                title="Prochaine Rentrée"
                                value={training.beginning}
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