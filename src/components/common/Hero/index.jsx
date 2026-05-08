function Hero({ 
    sectionId, 
    title, 
    imgSrc, 
    imgPositionY = "center 30%" 
}) {
    const formattedPosition = imgPositionY.replace('_', ' ');

    const renderFormattedText = (text) => {
        if (!text) return text;

        const regex = /(~~[^~]+~~)/g;
        const parts = text.split(regex);

        return parts.map((part, index) => {
            if (part?.startsWith('~~') && part?.endsWith('~~')) {
                return (
                    <span key={index} className="lowercase">
                        {part.slice(2, -2)}
                    </span>
                );
            }

            return <span key={index}>{part}</span>;
        });
    };

    return (
        <section id={sectionId} className="relative z-0 w-full h-56 overflow-hidden">
            {/* Background Image */}
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
                    {renderFormattedText(title)}
                </h1>
            </div>
        </section>
    );
}

export default Hero;