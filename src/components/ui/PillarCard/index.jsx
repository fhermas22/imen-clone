
function PillarCard({ title }) {
  return (
    <div className="flex flex-col px-20 py-12 border-2 border-border">
      <h3 className="font-title text-primary font-semibold capitalize">
        {title}
      </h3>
    </div>
  );
}

export default PillarCard