import DiamondPrimary from "../../../assets/images/icons/diamond-primary.svg";
import TargetPrimary from "../../../assets/images/icons/target-objective-primary.svg";
import BriefcasePrimary from "../../../assets/images/icons/briefcase-fill-primary.svg";

function TrainingDetail({title, description, subDetails, hasTopBorder = false, hasBottomBorder = false, isGoal = false, isOpening = false, isMaterial = false}) {
    return (
        <div className="pb-8">
            {/* Top Border */}
            {hasTopBorder && <div className="w-full h-0.5 bg-secondary mb-6 rounded-full lg:mb-8"></div>}

            {/* Detail Title */}
            <h3 className="font-title text-primary text-2xl font-semibold uppercase mb-4">
                {title}
            </h3>

            {/* Detail Description */}
            {description && (
                <p className="font-body text-black text-base leading-8 md:text-lg">
                    {description}
                </p>
            )}

            {/* Sub Details */}
            {subDetails && (
                <div className="mt-6 ml-2">
                    {subDetails.map((detail, index) => (
                        <div key={index} className="flex flex-row items-center gap-4 mb-4">
                            <img 
                                src={isGoal ? TargetPrimary : isOpening ? DiamondPrimary : isMaterial ? BriefcasePrimary : null}
                                alt={isGoal ? "Icône d'objectif" : isOpening ? "Icône d'ouverture" : isMaterial ? "Icône de matériel" : "Icône de détail"} 
                                width={isGoal ? 16 : isOpening ? 10 : isMaterial ? 16 : 0} 
                                className="" 
                            />
                            <p className="font-body text-black text-base leading-6 md:text-lg">
                                {detail}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Border */}
            {hasBottomBorder && <div className="w-full h-0.5 bg-secondary mt-6 rounded-full lg:mt-8"></div>}
        </div>
    );
}

export default TrainingDetail;