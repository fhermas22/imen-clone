import { Link } from 'react-router-dom';

const Button = ({ 
    children, 
    isPrimary = true, 
    className = "", 
    to, 
    href, 
    type = "button", 
    onClick, 
    isDownload = false,
    px,
    py,
    textSize,
    hoverScale
}) => {
    // Default padding management
    const paddingX = px ? px : 'px-6 xs:px-7 md:px-8';
    const paddingY = py ? py : 'py-3 xs:py-3.5 md:py-4';
    
    // Default text size management
    const textSizing = textSize ? textSize : 'text-base md:text-lg';

    // Default hover scale effect
    const scaleEffect = hoverScale ? hoverScale : 'hover:scale-110';

    const baseClasses = `
        ${isPrimary ? 'bg-primary text-white hover:bg-secondary hover:text-black' : 'bg-secondary text-black hover:bg-primary hover:text-white'} 
        ${textSizing}
        ${scaleEffect}
        font-body rounded-4xl 
        transition-all duration-500 ease-in-out cursor-pointer
        active:scale-95 text-center inline-block 
        ${paddingX} 
        ${paddingY}
        ${className}
    `;

    // 1. If it's a download (Internal or External)
    if (isDownload && (to || href)) {
        return (
            <a 
                href={to || href} 
                download 
                target="_blank" 
                rel="noopener noreferrer" 
                className={baseClasses}
            >
                {children}
            </a>
        );
    }

    // 2. If it's an internal link
    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    // 3. If it's an external link
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                {children}
            </a>
        );
    }

    // 4. Else, it's a regular button
    return (
        <button type={type} onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}

export default Button;