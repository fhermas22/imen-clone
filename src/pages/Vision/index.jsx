{/*== Component Imports  == */ }
import Hero from "../../components/common/Hero/index.jsx";
import RichTextBlock from "../../components/common/RichTextBlock/index.jsx";
import Button from "../../components/common/Button/index.jsx";
{/*== Illustration Imports  == */ }
import OurVisionHero from "../../assets/images/illustrations/hero/our-vision-hero.svg";
{/*== Icons Imports  == */}
import ZoomInPrimary from "../../assets/images/icons/zoom-in-primary.svg";
import ZoomInSecondary from "../../assets/images/icons/zoom-in-secondary.svg";
{/*== Data Imports  == */ }
import { visionInfo } from "../../datas/visionInfo";

function Vision() {
    return (
        <main>
            {/*======== Section 1 : Hero ======== */}
            <Hero
                sectionId="section1"
                title="Notre Vision"
                imgSrc={OurVisionHero}
                imgPositionY="center 50%"
            />

            {/*======== Section 2 : Main Content ======== */}
            <section id="section2" className="w-full flex flex-col items-center justify-center gap-2 py-8 px-3 md:px-8 lg:py-14 lg:px-[10vw] xl:gap-2 xl:px-[22vw]">
                {visionInfo.map(info => (
                    <RichTextBlock
                        key={info.id}
                        title={info.title}
                        paragraphs={info.contents}
                        introductionText={info.introductionText}
                        detailedParagraphs={info.detailedContents}
                        conclusionText={info.conclusionText}
                        moreIconPrimary={ZoomInPrimary}
                        moreIconSecondary={ZoomInSecondary}
                        hasTopBorder={false}
                        hasBottomBorder={info.id !== visionInfo.length}
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
                    to={"/our-network"}
                    className="capitalize px-10 xs:px-12 md:px-14"
                >
                    Découvrir notre Réseau
                </Button>
            </section>
        </main>
    );
}

export default Vision;