
function PillarCard({ icon, title, description }) {
  return (
    <div className="w-100 flex flex-col items-center px-6 py-12 border-2 border-border">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-[#f1f5f9] rounded-full mb-6">
        <img 
          src={icon} 
          alt={`Icône représentant le pilier '${title}'`}
          className="w-8 h-8 object-contain"
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