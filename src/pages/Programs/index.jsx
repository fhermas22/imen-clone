{/*== Component Imports  == */}
import Hero from "../../components/common/Hero";
{/*== Illustration Imports  == */}
import OurProgramsHero from "../../assets/images/illustrations/hero/our-programs-hero.svg";

function Programs() {
  return (
    <main>
        {/*======== Section 1 : Hero  ======== */}
        <Hero 
            sectionId="section1"
            title="Nos Programmes"
            imgSrc={OurProgramsHero}
            imgPositionY="center 40%"
        />

        {/*======== Section 2 : Programs List  ======== */}
        <section id="section2" className="flex flex-col items-center justify-center"></section>
    </main>
  );
}

export default Programs;