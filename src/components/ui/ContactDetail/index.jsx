function ContactDetail({ icon, iconAlt, title, description, href, titleIsClickable = false, descriptionIsClickable = false }) {
    return (
        <div className="flex flex-row items-center gap-4">
            {/*==== Icon ====*/}
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={iconAlt} className="w-8.5 h-8.5 md:w-7 md:h-7 lg:w-8.5 lg:h-8.5" />
            </a>

            {/*==== Information ====*/}
            <div className="flex flex-col gap-1">
                {titleIsClickable ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-title text-primary text-xl font-medium">
                        {title}
                    </a>
                ) : (
                    <h3 className="font-title text-primary text-xl font-medium">
                        {title}
                    </h3>
                )}
                {descriptionIsClickable ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-body text-black text-xs xs:text-sm md:text-xs lg:text-sm">
                        {description}
                    </a>
                ) : (
                    <p className="font-body text-black text-xs xs:text-sm md:text-xs lg:text-sm">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ContactDetail;