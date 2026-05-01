function Hero({ sectionId, title, imgSrc, imgPositionY = "center 30%" }) {
    const formattedPosition = imgPositionY.replace('_', ' ');

    return (
        <section id={sectionId} className="relative z-0 w-full h-56 overflow-hidden">
            {/* Bacground Image */}
            <img
                src={imgSrc}
                alt={`Illustration hero ${title}`}
                className={`absolute inset-0 w-full h-full object-cover object-[${imgPositionY}]`}
                style={{ objectPosition: formattedPosition }}
                loading="eager"
            />

            {/* Overlay with Title */}
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <h1 className="font-title text-white text-3xl font-semibold uppercase text-center px-2 xs:text-[32px] md:text-[40px] lg:text-[50px]">
                    {title}
                </h1>
            </div>
        </section>
    );
}

export default Hero;