import HeroPhoto from "../../assets/images/photos/hero_photo.jpg";
import Button from "../../components/common/Button";
import PillarCard from "../../components/ui/PillarCard";

function Home() {
  return (
    <>
      {/*======== Section 1 : Hero  ======== */}
      <div className="relative z-0 w-full h-96 overflow-hidden lg:h-104">
        
        {/*==== Sub-Section : Background Image ====*/}
        <img 
          src={HeroPhoto} 
          alt="Deux étudiants de l'IMeN travaillant ensemble sur un projet" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center">
            {/*==== Sub-Section : Text ====*/}
            <h1 className="font-title text-white text-3xl font-semibold capitalize text-center px-2 xs:text-4xl md:text-5xl">
              Premiere école d'expertise numérique
            </h1>

            {/*==== Sub-Section : Buttons ====*/}
            <div className="flex flex-col items-center gap-4 mt-10 md:flex-row md:mt-14">
              <Button isPrimary={true} className="md:mr-6">Découvrir l'IMeN</Button>
              <Button isPrimary={false} className="">Devenir Étudiant</Button>
            </div>
        </div>
      </div>

      {/*======== Section 2 : Our Three Fundamental Pillars  ======== */}
      <div className="flex flex-col items-center w-full h-100 bg-white">
        {/*==== Sub-Section : Title ====*/}
        <div className="w-full max-w-2xl flex flex-col items-center px-4 mt-10">
            <h2 className="font-title text-primary text-[32px] font-bold text-center xs:text-[36px] md:text-[40px] leading-10">
                Nos trois <br /> piliers fondamentaux
            </h2>
            <div className="w-20 h-1 bg-secondary mt-4 rounded-full"></div>
        </div>
        
        {/*==== Sub-Section : Pillar Cards ====*/}
        <div className="flex flex-col items-center justify-around mt-10 lg:flex-row">
          <PillarCard title={"Formation métier"} />
        </div>
      </div>
    </>
  )
}

export default Home
