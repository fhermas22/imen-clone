function BoxDetail({title, value, valueUppercase = true, hasBottomBorder = true}) {
    return (
        <div>
            <div className="w-[70vw] flex flex-row items-center justify-between md:w-[84vw] lg:w-[16vw]">
                <p className="font-body text-box-text text-sm font-bold lg:text-base">
                    {title} :
                </p>
                <span className="font-body text-box-text text-sm font-bold lg:text-base">
                    {valueUppercase ? value.toUpperCase() : value}
                </span>
            </div>
            {hasBottomBorder && <div className="w-full h-0.5 bg-box-border my-4"></div>}
        </div>
    );
}

export default BoxDetail;