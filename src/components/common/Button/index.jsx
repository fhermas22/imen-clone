import { Link } from 'react-router-dom';

const Button = ({ children, isPrimary = true, className, to, href, type = "button", onClick }) => {
    const baseClasses = `
        ${isPrimary ? 'bg-primary text-white hover:bg-secondary hover:text-black' : 'bg-secondary text-black hover:bg-primary hover:text-white'} 
        text-base font-body px-6 py-3 rounded-4xl 
        transition-all duration-500 ease-in-out cursor-pointer
        hover:scale-110 active:scale-95 text-center inline-block 
        xs:text-md xs:px-7 xs:py-3.5
        md:text-lg md:px-8 md:py-4
        ${className}
    `;

    // 1. If it's an internal link (using React Router's Link)
    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {children}
            </Link>
        );
    }

    // 2. If it's an external link (using a regular anchor tag)
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                {children}
            </a>
        );
    }

    // 3. Else, it's a regular button
    return (
        <button type={type} onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}

export default Button;