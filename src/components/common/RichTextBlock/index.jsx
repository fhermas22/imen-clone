import { Link } from "react-router-dom";

function RichTextBlock({ 
    title, 
    paragraphs, 
    introductionText,
    detailedParagraphs,
    conclusionText,
    moreIconPrimary,
    moreIconSecondary,
    moreIconSize = 20,
    hasTopBorder = false, 
    hasBottomBorder = false, 
    paddingY = "py-8", 
    paddingX = "px-6",
    boldClass = "font-extrabold text-black",
    italicClass = "italic text-gray-700",
    underlineClass = "underline",
    lowercaseClass = "lowercase"
}) {
    
    // Function for parsing and rendering text with formatting
    const renderFormattedText = (text) => {
        if (!text) return text;
        
        // Regex for matching **bold**, *italic*, __underline__ and ~~lowercase~~
        const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|~~[^~]+~~)/g;
        const parts = text.split(regex);
        
        return parts.map((part, index) => {
            // Bold : **text**
            if (part?.startsWith('**') && part?.endsWith('**')) {
                return (
                    <strong key={index} className={boldClass}>
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            
            // Italic : *text*
            if (part?.startsWith('*') && part?.endsWith('*')) {
                return (
                    <em key={index} className={italicClass}>
                        {part.slice(1, -1)}
                    </em>
                );
            }
            
            // Underline : __text__
            if (part?.startsWith('__') && part?.endsWith('__')) {
                return (
                    <span key={index} className={underlineClass}>
                        {part.slice(2, -2)}
                    </span>
                );
            }

            // Lowercase : ~~text~~
            if (part?.startsWith('~~') && part?.endsWith('~~')) {
                return (
                    <span key={index} className={lowercaseClass}>
                        {part.slice(2, -2)}
                    </span>
                );
            }
            
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div className={`w-full flex flex-col items-start justify-center gap-6 ${paddingY} ${paddingX}`}>
            {/* Top Border */}
            {hasTopBorder && <div className="w-full h-0.5 bg-secondary mb-6 rounded-full lg:mb-8"></div>}

            {/* Title */}
            <h2 className="font-title text-primary text-2xl font-semibold uppercase">
                {renderFormattedText(title)}
            </h2>

            {/* Paragraphs */}
            {paragraphs && paragraphs.map((paragraph, index) => (
                <p key={index} className="font-body text-black text-base leading-8 md:text-lg">
                    {renderFormattedText(paragraph)}
                </p>
            ))}

            {/* Introduction Text */}
            {introductionText && (
                <p className="font-body text-black text-base leading-8 md:text-lg">
                    {renderFormattedText(introductionText)}
                </p>
            )}

            {/* Detailed Paragraphs */}
            {detailedParagraphs && detailedParagraphs.map((paragraph, index) => (
                <span>
                    <h3 className="font-body text-primary text-lg font-bold">
                        {paragraph.id}. {paragraph.title} :
                    </h3>
                    <p key={index} className="font-body text-black text-base leading-8 md:text-lg">
                        {renderFormattedText(paragraph.content)}
                        {paragraph.seeMoreLink && (
                            <Link 
                                to={paragraph.seeMoreLink} 
                                className="inline-flex items-center ml-2 align-middle group transition-transform duration-500 ease-in-out hover:scale-125"
                            >
                                <img 
                                  src={moreIconPrimary}
                                  alt="Cliquez pour en savoir plus"
                                  width={moreIconSize}
                                  height={moreIconSize}
                                  className="inline-block group-hover:hidden"
                                />
                                <img 
                                  src={moreIconSecondary}
                                  alt="Cliquez pour en savoir plus"
                                  width={moreIconSize}
                                  height={moreIconSize}
                                  className="hidden group-hover:inline-block"
                                />
                            </Link>
                        )}
                    </p>
                </span>
            ))}

            {/* Conclusion Text */}
            {conclusionText && (
                <p className="font-body text-black text-base leading-8 md:text-lg">
                    {renderFormattedText(conclusionText)}
                </p>
            )}

            {/* Bottom Border */}
            {hasBottomBorder && <div className="w-full h-0.5 bg-secondary mt-6 rounded-full lg:mt-8"></div>}
        </div>
    );
}

export default RichTextBlock;