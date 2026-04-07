import HeroIllustration from "../../assets/images/illustrations/long.term.training/hero/it-programming.svg";
import TrainingIllustration from "../../assets/images/illustrations/long.term.training/it-programming.jpg";

function Training() {
    return (
        <main>
            {/*======== Section 1 : Title Hero  ======== */}
            <section id="section1" className="relative z-0 w-full h-56 overflow-hidden">
                {/*==== Sub-Section : Background Illustration Image ====*/}
                <img
                    src={HeroIllustration}
                    alt="Image minimaliste et stylisée illustrant la formation en Programmation Informatique"
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                    loading="eager"
                />

                {/*==== Sub-Section : Training Title ====*/}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-[32px] md:text-[40px] lg:text-[50px]">
                        Programmation Informatique
                    </h1>
                </div>
            </section>

            <div className="flex flex-row items-center justify-center">
                {/*======== Section 2 : Training Main Details  ======== */}
                <section id="section2" className="flex flex-col items-center">
                    {/*==== Sub-Section : Training Illustration Image ====*/}
                    <img src={TrainingIllustration} alt="Image illustrant l'ambiance de la formation en Programmation Informatique" />
                </section>

                {/*======== Section 3 : Side Box  ======== */}
                <section id="section3"></section>
            </div>
        </main>
    );
}

export default Training;