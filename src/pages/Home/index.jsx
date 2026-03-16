import HeroPhoto from "../../assets/images/photos/imen-building.jpg";
import Button from "../../components/common/Button";
import PillarCard from "../../components/ui/PillarCard";
import GraduationCapBlue from "../../assets/images/icons/graduation-cap-blue.svg";
import GraduationCapWhite from "../../assets/images/icons/graduation-cap-white.svg";
import TeamBlue from "../../assets/images/icons/team-blue.svg";
import TeamWhite from "../../assets/images/icons/team-white.svg";
import BusinessTimeBlue from "../../assets/images/icons/business-time-blue.svg";
import BusinessTimeWhite from "../../assets/images/icons/business-time-white.svg";
import StatsCounter from "../../components/ui/StatsCounter";
import SectionTitle from "../../components/ui/SectionTitle";

function Home() {
  return (
    <main>
      {/*======== Section 1 : Hero  ======== */}
      <section className="relative z-0 w-full h-90 overflow-hidden lg:h-104">
        
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
      <section className="w-full pt-8 pb-16 bg-white flex flex-col items-center lg:pt-12 lg:pb-20">
        <div className="w-[90%]">
          {/*==== Sub-Section : Title ====*/}
          <SectionTitle>
            Nos trois <br /> piliers fondamentaux
          </SectionTitle>
          
          {/*==== Sub-Section : Pillar Cards ====*/}
          <div className="w-full flex flex-col items-stretch justify-center gap-8 lg:flex-row ">
            <PillarCard 
              iconDefault={GraduationCapBlue}
              iconHover={GraduationCapWhite}
              title="Formation Métier"
              description="Nous formons à un métier. Par la pratique pour rendre l’étudant oppérationnel sur le terrain."
            />
            <PillarCard 
              iconDefault={TeamBlue}
              iconHover={TeamWhite}
              title="Centré sur l'humain"
              description="Nous mettons l’homme au coeur de nos formations, afin de fabriquer des professionnels aguerris et resilients."
            />
            <PillarCard 
              iconDefault={BusinessTimeBlue}
              iconHover={BusinessTimeWhite}
              title="Employabilités des Jeunes"
              description="Nous formons à l’emploi et à l’auto-emploi, pour combattre le chômage galoppant."
            />
          </div>

        </div>
      </section>

      {/*======== Section 3 : Statistics  ======== */}
      <section className="
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
      <section className="w-full pt-8 pb-16 flex flex-col items-center lg:pt-14 lg:pb-20">
        <div className="w-[90%]">
          {/*==== Sub-Section : Title ====*/}
          <SectionTitle> 
            Formations Longues
          </SectionTitle>

          {/*==== Sub-Section : Training Cards ====*/}
          <div className="flex flex-row items-center justify-center">
            <div className="w-100 h-140 flex flex-col border-2 border-border rounded-md overflow-hidden">
              <img 
                src="src/assets/images/illustrations/it-programming.png" 
                alt="Image illustrant deux étudiants de l'IMeN en Programmation Informatique travaillant ensemble sur un projet" 
                width={626} 
                height={417} 
                className="" 
                loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/*======== Section 5 : ...  ======== */}
      <section className="w-full h-20"></section>
    </main>
  )
}

export default Home
