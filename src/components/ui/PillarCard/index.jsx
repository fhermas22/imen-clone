
function PillarCard({ iconDefault, iconHover, title, description }) {
  return (
    <div className="w-[90vw] flex flex-col items-center px-6 py-6 border-2 border-border rounded-md group hover:border-secondary transition-all duration-600 ease-in-out lg:w-100 lg:py-12">
      {/* Icon */}
      <div className="flex items-center justify-center w-18 h-18 bg-[#f1f5f9] rounded-full mb-6 group-hover:bg-primary transition-colors duration-600 ease-in-out">
        <img 
          src={iconDefault} 
          alt={`Icône représentant le pilier '${title}'`}
          className="w-8 h-8 object-contain group-hover:hidden"
        />
        <img 
          src={iconHover} 
          alt={`Icône représentant le pilier '${title}'`} 
          className="hidden w-8 h-8 group-hover:block" 
        />
      </div>

      {/* Title */}
      <h3 className="font-title text-primary text-xl font-semibold text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-black text-sm text-center mt-4 leading-6">
        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
    </div>
  );
}

export default PillarCard