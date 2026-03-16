function SectionTitle({ children }) {
  return (
    <div className="flex flex-col items-center mb-8 lg:mb-12">
        <h2 className="font-title text-primary text-2xl font-bold text-center leading-9 md:text-3xl lg:text-[40px]">
            {children}
        </h2>
        <div className="w-20 h-1 bg-secondary mt-4 rounded-full lg:mt-6"></div>
    </div>
  );
}

export default SectionTitle