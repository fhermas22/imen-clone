{/*== Component Imports  == */}
import TrainingCard from "../../components/ui/TrainingCard";
{/*== Illustration Imports  == */}
import HeroIllustration from "../../assets/images/illustrations/trainings/long.term.training/hero/digital-department-hero.svg";
{/*== Data Imports  == */}
import { trainingList } from "../../datas/trainingList";

function Department() {
    const trainings = trainingList.filter(training => training.departement === "Département Numérique");

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

                {/*==== Sub-Section : Department Title ====*/}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-[32px] md:text-[40px] lg:text-[50px]">
                        Département Numérique
                    </h1>
                </div>
            </section>

            <section id="section2" className="w-full pt-10 pb-16 flex flex-col items-center lg:pt-14 lg:pb-20">
               <div className="flex flex-col items-stretch justify-center gap-8 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
                 {
                    trainings.map(training => (
                        <TrainingCard
                            key={training.id}
                            id={training.id}
                            title={training.title}
                            description={training.description}
                            imageSrc={training.illustration}
                            category={training.departement}
                            categoryLink="/department"
                        />
                    ))
                }
               </div>
            </section>
        </main>
    );
}

export default Department;