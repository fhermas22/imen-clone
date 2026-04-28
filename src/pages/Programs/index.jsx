{/*== Component Imports  == */ }
import Hero from "../../components/common/Hero";
import RichTextBlock from "../../components/common/RichTextBlock";
import Button from "../../components/common/Button";
{/*== Illustration Imports  == */ }
import OurProgramsHero from "../../assets/images/illustrations/hero/our-programs-hero.svg";
{/*== Data Imports  == */ }
import { programList } from "../../datas/programList";

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
      <section id="section2" className="w-full flex flex-col items-center justify-center gap-2 py-8 px-3 md:px-8 lg:py-14 lg:px-[10vw] xl:gap-2 xl:px-[22vw]">
        {programList.map(program => (
          <RichTextBlock
            key={program.id}
            title={program.title}
            paragraphs={program.contents}
            hasTopBorder={false}
            hasBottomBorder={program.id !== programList.length}
            paddingY="pt-8 pb-0"
          />
        ))}
      </section>

      {/*======== Section 3 : Action Buttons  ======== */}
      <section id="section3" className="flex flex-col items-center justify-center gap-6 mt-4 mb-14 md:flex-row">
        <Button isPrimary={true} className="px-10 xs:px-12 md:px-14">
          Devenir Étudiant
        </Button>

        <Button
          isPrimary={false}
          className="capitalize px-10 xs:px-12 md:px-14"
        >
          Découvrir notre École
        </Button>
      </section>
    </main>
  );
}

export default Programs;