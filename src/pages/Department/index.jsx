{/*== React & Package Imports  == */}
import { useParams } from "react-router-dom";
{/*== Component Imports  == */}
import Hero from "../../components/common/Hero/index.jsx";
import TrainingCard from "../../components/ui/TrainingCard";
import Button from "../../components/common/Button";
import ErrorNotFound from "../../components/common/ErrorNotFound/index.jsx";
{/*== Illustration Imports  == */}
import DigitalHero from "../../assets/images/illustrations/trainings/long.term.training/hero/digital-department-hero.svg";
import DesignHero from "../../assets/images/illustrations/trainings/long.term.training/hero/design-department-hero.svg";
import ContinuingHero from "../../assets/images/illustrations/trainings/continuing.education/hero/continuing-education-hero.svg";
{/*== Data Imports  == */}
import { trainingList } from "../../datas/trainingList";

const deptConfig = {
  "numerique": {
    name: "Département Numérique",
    hero: DigitalHero,
    next: "design" 
  },
  "design": {
    name: "Département Design",
    hero: DesignHero,
    next: "continuing-education"
  },
  "continuing-education": {
    name: "Formations Continues",
    hero: ContinuingHero,
    next: "numerique" 
  }
};

function Department() {
    // Get the department from the URL parameters
    const { dept } = useParams();
    const config = deptConfig[dept];

    // Determine the next department for the navigation button
    const nextDeptKey = config?.next;
    const nextDeptData = deptConfig[nextDeptKey];
    
    // If the next department is "continuing-education", we want à special label and link
    const deptLink = nextDeptKey ? `/department/${nextDeptKey}` : "/";
    const deptLabel = nextDeptData?.name || "Départements";

    if (!config) {
        return (
            <ErrorNotFound 
                title="404"
                subtitle="Département non trouvé"
                description="Le département demandé n'existe pas."
                redirectTo="/"
                redirectText="Retour à l'accueil"
                countdown={5}
            />
        );
    }

    // Filter the trainings based on the department
    const trainings = trainingList.filter(training => 
        dept === "continuing-education" 
            ? training.departement === null 
            : training.departement === config.name
    );

    return (
        <main>
            {/*======== Section 1 : Title Hero  ======== */}
            <Hero 
                sectionId="section1"
                title={config.name}
                imgSrc={config.hero}
            />

            {/*======== Section 2 : Department Trainings ======== */}
            <section id="section2" className="w-full pt-10 pb-16 flex flex-col items-center lg:pt-14 lg:pb-20">
                <div className="w-[90%] lg:w-[66%]">
                    {/*==== Sub-Section : Trainings List ====*/}
                    {trainings.length > 0 ? (
                        <div className="flex flex-col items-stretch justify-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
                            {trainings.map(training => (
                                <TrainingCard
                                    key={training.id}
                                    id={training.id}
                                    title={training.title}
                                    description={training.description}
                                    imageSrc={training.illustration}
                                    categoryLink={`/department/${dept}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-30">
                            <p className="font-body text-2xl text-gray-500 mb-8">Aucune formation disponible actuellement.</p>
                            <Button isPrimary={false} to="/" className="py-1 xs:py-1.5 md:py-2">
                                Retour à l'Acceuil
                            </Button>
                        </div>
                    )}

                    {/*==== Sub-Section : Action Buttons ====*/}
                    <div className="flex flex-col items-center justify-center gap-6 mt-14 md:flex-row">
                        <Button isPrimary={true} className="px-10 xs:px-12 md:px-14">
                            Devenir Étudiant
                        </Button>
                        
                        <Button 
                            isPrimary={false} 
                            className="capitalize px-10 xs:px-12 md:px-14" 
                            to={deptLink}
                        >
                            {dept === "design" ? "Voir les Formations Continues" : `Voir Pôle ${deptLabel.replace("Département ", "")}`}
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Department;