function TrainingCard({ title, description, imageSrc }) {
  return (
    <div className="w-full flex flex-col border-2 border-border rounded-md overflow-hidden lg:w-100">
      <img 
        src={imageSrc}
        alt={`Image illustrant la formation ${title}`} 
        width={626} 
        height={417} 
        className="" 
        loading="lazy" 
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-title text-primary text-xl font-semibold uppercase">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
}

export default TrainingCard