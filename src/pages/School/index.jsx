{/*== Component Imports  == */ }
import Hero from "../../components/common/Hero/index.jsx";
import RichTextBlock from "../../components/common/RichTextBlock/index.jsx";
import Button from "../../components/common/Button/index.jsx";
{/*== Illustration Imports  == */ }
import SchoolHero from "../../assets/images/illustrations/hero/school-hero.webp";
{/*== Data Imports  == */ }
import { schoolInfo } from "../../datas/schoolInfo";

function School() {
    return (
        <main>
            {/*======== Section 1 : Hero ======== */}
            <Hero
                sectionId="section1"
                title="Découvrir l'IM~~e~~N"
                imgSrc={SchoolHero}
                imgPositionY="center 20%"
            />

            {/*======== Section 2 : Infos ======== */}
            <section id="section2" className="w-full flex flex-col items-center justify-center gap-2 py-8 px-3 md:px-8 lg:py-14 lg:px-[10vw] xl:gap-2 xl:px-[22vw]">
                {schoolInfo.map(info => (
                    <RichTextBlock
                        key={info.id}
                        title={info.title}
                        paragraphs={info.contents}
                        introductionText={info.introductionText}
                        detailedParagraphs={info.detailedContents}
                        hasTopBorder={false}
                        hasBottomBorder={info.id !== schoolInfo.length}
                        paddingY="pt-8 pb-0"
                    />
                ))}
            </section>

            {/*======== Section 3 : Action Buttons ======== */}
            <section id="section3" className="flex flex-col items-center justify-center gap-6 mt-4 mb-14 md:flex-row">
                <Button
                    isPrimary={true}
                    to={"/student-registration"}
                    className="px-10 xs:px-12 md:px-14"
                >
                    Devenir Étudiant
                </Button>

                <Button
                    isPrimary={false}
                    to={"/our-vision"}
                    className="capitalize px-10 xs:px-12 md:px-14"
                >
                    Découvrir notre Vision
                </Button>
            </section>
        </main>
    );
}

export default School;