import { Link } from "react-router-dom";

function TrainingCard({ title, description, imageSrc, category, categoryLink }) {
  return (
    <div className="w-full flex flex-col border-2 border-border rounded-md overflow-hidden lg:w-100">
        {/* Training Illustration */}
      <img 
        src={imageSrc}
        alt={`Image illustrant la formation ${title}`} 
        width={626} 
        height={417} 
        className="" 
        loading="lazy" 
      />
      <div className="pt-8 pb-10 px-9 flex flex-col">
        {/* Training Category */}
        <span className="w-40 px-5 py-1 bg-secondary text-center rounded-sm hover:scale-102 group transition-all duration-500 ease-in-out">
            <Link to={categoryLink} className="text-black text-sm capitalize group-hover:text-white transition-colors duration-500 ease-in-out">
                {category}
            </Link>
        </span>

        {/* Training Title */}
        <h3 className="font-title text-primary text-xl font-semibold uppercase pt-5 pb-3">{title}</h3>

        {/* Training Description */}
        <p className="text-black text-sm leading-6">{description}</p>
      </div>
    </div>
  );
}

export default TrainingCard