import { Link } from "react-router-dom";

function TrainingCard({ title, description, imageSrc, link, category, categoryLink }) {
  return (
    <div className="w-full flex flex-col border-2 border-border rounded-md overflow-hidden lg:w-100">
        {/* Training Illustration */}
        <Link to={link}>
            <img 
              src={imageSrc}
              alt={`Image illustrant la formation ${title}`} 
              width={626} 
              height={417} 
              className="" 
              loading="lazy" 
            />
        </Link>

        <div className="pt-5 pb-4 px-4 flex flex-col md:pt-6 md:pb-8 md:px-6 lg:pt-8 lg:pb-10 lg:px-9">
            {/* Training Category */}
            {category == null ? null : (
                <span className="inline-flex w-fit px-5 py-1.5 bg-secondary text-center rounded-sm hover:scale-102 group transition-all duration-500 ease-in-out">
                    <Link to={categoryLink} className="text-black text-sm capitalize whitespace-nowrap group-hover:text-white transition-colors duration-500 ease-in-out">
                        {category}
                    </Link>
                </span>
            )}

            {/* Training Title */}
            <Link to={link} className={`font-title text-primary text-xl font-semibold uppercase pb-3 hover:text-secondary transition duration-500 ease-in-out ${category == null ? "pt-0" : "pt-5"}`}>
                {title}
            </Link>

            {/* Training Description */}
            <p className="text-black text-sm leading-6">{description}</p>
        </div>
    </div>
  );
}

export default TrainingCard