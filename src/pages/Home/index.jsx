{/*== Component Imports  == */}
import Button from "../../components/common/Button";
import PillarCard from "../../components/ui/PillarCard";
import StatsCounter from "../../components/ui/StatsCounter";
import SectionTitle from "../../components/ui/SectionTitle";
import TrainingCard from "../../components/ui/TrainingCard";
import ValuePoint from "../../components/ui/ValuePoint";
{/*== Photo & Illustration Imports  == */}
import HeroPhoto from "../../assets/images/photos/imen-building.jpg";
import OurStudents from "../../assets/images/illustrations/other/our-students.jpg";
{/*== Data Imports  == */}
import { pillarList } from "../../datas/pillarList";
import { longTrainingList } from "../../datas/longTrainingList";
import { valuePointList } from "../../datas/valuePointList";
import { continuingEducationList } from "../../datas/continuingEducationList";

function Home() {
  return (
    <main>
      {/*======== Section 1 : Hero  ======== */}
      <section id="section1" className="relative z-0 w-full h-90 overflow-hidden lg:h-104">
        
        {/*==== Sub-Section : Background Image ====*/}
        <img 
          src={HeroPhoto} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
            {/*==== Sub-Section : Text ====*/}
            <h1 className="font-title text-white text-3xl font-semibold capitalize text-center px-2 xs:text-4xl md:text-[44px] lg:text-[50px]">
              Premiere école d'expertise numérique
            </h1>

            {/*==== Sub-Section : Buttons ====*/}
            <div className="flex flex-col items-center gap-4 mt-10 md:flex-row md:mt-16">
              <Button isPrimary={true} className="md:mr-6">Découvrir l'IMeN</Button>
              <Button isPrimary={false} className="">Devenir Étudiant</Button>
            </div>
        </div>
      </section>

      {/*======== Section 2 : Our Three Fundamental Pillars  ======== */}
      <section id="section2" className="w-full pt-10 pb-16 bg-white flex flex-col items-center lg:pt-14 lg:pb-20">
        <div className="w-[90%]">
          {/*==== Sub-Section : Title ====*/}
          <SectionTitle>
            Nos trois <br /> piliers fondamentaux
          </SectionTitle>
          
          {/*==== Sub-Section : Pillar Cards ====*/}
          <div className="w-full flex flex-col items-stretch justify-center gap-8 lg:flex-row ">
            {
              pillarList.map(pillar => (
                <PillarCard 
                  key={pillar.id}
                  iconDefault={pillar.iconDefault}
                  iconHover={pillar.iconHover}
                  title={pillar.title}
                  description={pillar.description}
                />
              ))
            }
          </div>

        </div>
      </section>

      {/*======== Section 3 : Statistics  ======== */}
      <section id="section3" className="
        w-full h-174 flex flex-col items-center justify-center gap-10 bg-linear-to-r from-secondary to-primary 
        md:h-100 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-0 md:p-12 
        lg:h-75 lg:flex lg:flex-row lg:gap-18 lg:p-0
      ">
        <StatsCounter number="72" title="Étudiants satisfaits" />
        <StatsCounter number="16" title="Formations Réalisées" />
        <StatsCounter number="39" title="Etudiants certifiés" />
        <StatsCounter number="+100" title="Partenaires" />
      </section>

      {/*======== Section 4 : Long-term Training Courses  ======== */}
      <section id="section4" className="w-full pt-10 pb-8 flex flex-col items-center lg:pt-14 lg:pb-10">
        <div className="w-[90%]">
          {/*==== Sub-Section : Title ====*/}
          <SectionTitle> 
            Formations Longues
          </SectionTitle>

          {/*==== Sub-Section : Training Cards ====*/}
          <div className="flex flex-col items-stretch justify-center gap-8 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
            {
              longTrainingList.map(training => (
                <TrainingCard 
                  key={training.id}
                  title={training.title}
                  description={training.description}
                  imageSrc={training.imageSrc}
                  category={training.category}
                />
              ))
            }
          </div>
        </div>
      </section>

      {/*======== Section 5 : Why Choose Us?  ======== */}
      <section id="section5" className="w-full pt-10 pb-8 flex flex-col items-center lg:pt-14 lg:pb-10">
        {/*==== Sub-Section : Title ====*/}
        <SectionTitle>
          Pourquoi nous choisir ?
        </SectionTitle>

        <div className="flex flex-col items-center justify-center lg:gap-4 lg:flex-row">
          {/*==== Sub-Section : Illustration Image ====*/}
          <img 
            src={OurStudents} 
            alt={`Image illustrant les étudiants de l'IMeN`} 
            width={626} 
            height={417} 
            className="rounded-md w-[90vw] mb-8 md:mb-12 lg:w-[32vw] lg:mb-0" 
            loading="lazy" 
          />

          {/*==== Sub-Section : Content ====*/}
          <div className="flex flex-col items-center justify-center gap-6 w-screen px-18 lg:w-[36vw]">
            {
              valuePointList.map(point => (
                <ValuePoint 
                  key={point.id}
                  icon={point.icon}
                  text={point.text}
                />
              ))
            }

            <span className="flex justify-center w-full lg:justify-start">
              <Button isPrimary={true} className="self-start mt-4">Devenir Étudiant</Button>
            </span>
          </div>
        </div>
      </section>

      {/*======== Section 6 : Continuing Education  ======== */}
      <section id="section6" className="w-full pt-10 pb-16 flex flex-col items-center lg:pt-14 lg:pb-20">
        <div className="w-[90%]">
          {/*==== Sub-Section : Title ====*/}
          <SectionTitle>
            Formations Continues
          </SectionTitle>

          {/*==== Sub-Section : Training Cards ====*/}
          <div className="flex flex-col items-stretch justify-center gap-8 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
            {
              continuingEducationList.map(training => (
                <TrainingCard 
                  key={training.id}
                  title={training.title}
                  description={training.description}
                  imageSrc={training.imageSrc}
                  category={training.category}
                />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
