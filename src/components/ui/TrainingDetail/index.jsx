function TrainingDetail({title, description, hasTopBorder = false, hasBottomBorder = false}) {
    return (
        <div className="pb-8">
            {/* Top Border */}
            {hasTopBorder && <div className="w-full h-0.5 bg-secondary mb-6 rounded-full lg:mb-8"></div>}

            {/* Detail Title */}
            <h3 className="font-title text-primary text-2xl font-semibold uppercase mb-4">
                {title}
            </h3>

            {/* Detail Description */}
            <p className="font-body text-black text-lg leading-8">
                {description}
            </p>

            {/* Bottom Border */}
            {hasBottomBorder && <div className="w-full h-0.5 bg-secondary mt-6 rounded-full lg:mt-8"></div>}
        </div>
    );
}

export default TrainingDetail;