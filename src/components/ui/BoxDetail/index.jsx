function BoxDetail({title, value, valueUppercase = true, hasBottomBorder = true}) {
    return (
        <div>
            <div className="w-75 flex flex-row items-center justify-between">
                <p className="font-body text-box-text text-base font-bold">
                    {title} :
                </p>
                <span className="font-body text-box-text text-base font-bold">
                    {valueUppercase ? value.toUpperCase() : value}
                </span>
            </div>
            {hasBottomBorder && <div className="w-full h-0.5 bg-box-border my-4"></div>}
        </div>
    );
}

export default BoxDetail;