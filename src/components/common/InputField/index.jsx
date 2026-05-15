function InputField({
    type,
    name,
    id,
    placeholder,
    width = "w-full",
    cols = 4,
    rows = 9,
}) {
    return ( 
        type === "textarea" ? (
            <textarea
                name={name}
                id={id}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                className={`${width} px-4 py-4 font-body text-input-text text-sm bg-transparent border border-input rounded-sm focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2 focus:text-slate-800`}
            />
        ) 
        : (
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={`${width} px-4 py-4 font-body text-input-text text-sm bg-transparent border border-input rounded-sm focus-within:outline-2 focus-within:outline-primary focus-within:outline-offset-2 focus:text-slate-800`}
            />
        )
    );
}

export default InputField;