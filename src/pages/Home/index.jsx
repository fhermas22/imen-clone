import HeroPhoto from "../../assets/images/photos/hero_photo.jpg";
import Button from "../../components/common/Button";
import PillarCard from "../../components/ui/PillarCard";
import GraduationCapBlue from "../../assets/images/icons/graduation-cap-blue.svg";
import GraduationCapWhite from "../../assets/images/icons/graduation-cap-white.svg";
import TeamBlue from "../../assets/images/icons/team-blue.svg";
import TeamWhite from "../../assets/images/icons/team-white.svg";
import BusinessTimeBlue from "../../assets/images/icons/business-time-blue.svg";
import BusinessTimeWhite from "../../assets/images/icons/business-time-white.svg";

function Home() {
  return (
    <>
      {/*======== Section 1 : Hero  ======== */}
      <section className="relative z-0 w-full h-90 overflow-hidden lg:h-104">
        
        {/*==== Sub-Section : Background Image ====*/}
        <img 
          src={HeroPhoto} 
          alt="Deux étudiants de l'IMeN travaillant ensemble sur un projet" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center">
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
        <div className="w-[90%] max-w-6xl flex flex-col items-center">
          {/*==== Sub-Section : Title ====*/}
          <div className="flex flex-col items-center mb-8 lg:mb-12">
              <h2 className="font-title text-primary text-2xl font-bold text-center leading-9 md:text-3xl lg:text-[40px]">
                  Nos trois <br /> piliers fondamentaux
              </h2>
              <div className="w-20 h-1 bg-secondary mt-4 rounded-full lg:mt-6"></div>
          </div>
          
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
    </>
  )
}

export default Home
