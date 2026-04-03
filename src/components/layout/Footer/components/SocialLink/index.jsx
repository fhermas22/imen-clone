function SocialLink({ href, iconPrimary, iconSecondary, alt, size }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`group relative inline-block ${size == null ? "w-7 h-7" : size}`}>
            {/* Primary Icon */}
            <img 
                src={iconPrimary} 
                alt={alt}
                className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" 
            />
            {/* Secondary Icon (appears on hover) */}
            <img 
                src={iconSecondary} 
                alt={alt}
                className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" 
            />
        </a>
    );
}

export default SocialLink;