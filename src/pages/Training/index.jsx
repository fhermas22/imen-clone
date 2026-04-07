import HeroIllustration from "../../assets/images/illustrations/long.term.training/hero/it-programming.svg";

function Training() {
    return (
        <main>
            {/*======== Section 1 : Title Hero  ======== */}
            <section id="section1" className="relative z-0 w-full h-56 overflow-hidden">
                {/*==== Sub-Section : Background Image ====*/}
                <img
                    src={HeroIllustration}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                    loading="eager"
                />

                {/*==== Sub-Section : Title ====*/}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-4xl md:text-[44px] lg:text-[50px]">
                        Programmation Informatique
                    </h1>
                </div>
            </section>
        </main>
    );
}

export default Training;