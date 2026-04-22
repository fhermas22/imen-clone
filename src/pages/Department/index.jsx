/*== Component Imports  == */
import { useParams } from "react-router-dom";
import TrainingCard from "../../components/ui/TrainingCard";
import Button from "../../components/common/Button";
/*== Illustration Imports  == */
import DigitalHero from "../../assets/images/illustrations/trainings/long.term.training/hero/digital-department-hero.svg";
import DesignHero from "../../assets/images/illustrations/trainings/long.term.training/hero/design-department-hero.svg";
import ContinuingHero from "../../assets/images/illustrations/trainings/continuing.education/hero/continuing-education-hero.svg";
/*== Data Imports  == */
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
            <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-title font-bold text-gray-900 mb-6 uppercase">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Département non trouvé
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Le département demandé n'existe pas.
                    </p>
                    <Button to="/" isPrimary>
                        Retour à l'accueil
                    </Button>
                </div>
            </main>
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
            <section id="section1" className="relative z-0 w-full h-56 overflow-hidden">
                <img
                    src={config.hero}
                    alt={`Illustration ${config.name}`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-[32px] md:text-[40px] lg:text-[50px]">
                        {config.name}
                    </h1>
                </div>
            </section>

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