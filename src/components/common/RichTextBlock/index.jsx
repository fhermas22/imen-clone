function RichTextBlock({ 
    title, 
    paragraphs, 
    hasTopBorder = false, 
    hasBottomBorder = false, 
    paddingY = "py-8", 
    paddingX = "px-6",
    boldClass = "font-extrabold text-black",
    italicClass = "italic text-gray-700",
    underlineClass = "underline"
}) {
    
    // Function for parsing and rendering text with formatting
    const renderFormattedText = (text) => {
        if (!text) return text;
        
        // Regex for matching **bold**, *italic* and __underline__
        const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__)/g;
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
            
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div className={`w-full flex flex-col items-start justify-center gap-6 ${paddingY} ${paddingX}`}>
            {/* Top Border */}
            {hasTopBorder && <div className="w-full h-0.5 bg-secondary mb-6 rounded-full lg:mb-8"></div>}

            {/* Title */}
            <h2 className="font-title text-primary text-2xl font-semibold uppercase">
                {title}
            </h2>

            {/* Paragraphs */}
            {paragraphs && paragraphs.map((paragraph, index) => (
                <p key={index} className="font-body text-black text-base leading-8 md:text-lg">
                    {renderFormattedText(paragraph)}
                </p>
            ))}

            {/* Bottom Border */}
            {hasBottomBorder && <div className="w-full h-0.5 bg-secondary mt-6 rounded-full lg:mt-8"></div>}
        </div>
    );
}

export default RichTextBlock;