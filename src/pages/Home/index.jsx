import HeroPhoto from "../../assets/images/photos/hero_photo.jpg";

function Home() {
  return (
    <>
      {/*======== Section : Hero  ======== */}
      <div className="relative z-0 w-full h-104 overflow-hidden">
        
        {/*==== Sub-Section : Background Image ====*/}
        <img 
          src={HeroPhoto} 
          alt="Deux étudiants de l'IMeN travaillant ensemble sur un projet" 
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          loading="eager"
        />

        {/*==== Sub-Section : Text ====*/}
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
            <h1 className="font-title text-white text-5xl font-semibold capitalize">Premiere école d'expertise numérique</h1>
        </div>

      </div>
    </>
  )
}

export default Home
