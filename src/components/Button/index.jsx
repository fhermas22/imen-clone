
const Button = ({ children, isPrimary = true, className }) => {
    const variantClasses = isPrimary 
        ? 'bg-primary hover:bg-secondary' 
        : 'bg-secondary hover:bg-primary';

    return (
        <button className={`
            ${variantClasses} 
            text-white text-lg font-body px-8 py-4 rounded-4xl 
            transition-all duration-500 ease-in-out cursor-pointer
            hover:scale-110 active:scale-95
            ${className}
        `}>
            {children}
        </button>
    )
}

export default Button