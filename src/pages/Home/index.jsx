import HeroPhoto from "../../assets/images/photos/hero_photo.jpg";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      {/*======== Section : Hero  ======== */}
      <div className="relative z-0 w-full h-96 overflow-hidden md:h-104">
        
        {/*==== Sub-Section : Background Image ====*/}
        <img 
          src={HeroPhoto} 
          alt="Deux étudiants de l'IMeN travaillant ensemble sur un projet" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center">
            {/*==== Sub-Section : Text ====*/}
            <h1 className="text-white text-3xl font-title font-semibold capitalize text-center md:text-5xl">
              Premiere école d'expertise numérique
            </h1>

            {/*==== Sub-Section : Buttons ====*/}
            <div className="flex flex-col items-center gap-4 mt-10 md:flex-row md:mt-14">
              <Button isPrimary={true} className="md:mr-6">Découvrir l'IMeN</Button>
              <Button isPrimary={false} className="">Devenir Étudiant</Button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Home
