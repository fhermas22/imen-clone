function ValuePoint({ icon, text }) {
    return (
        <div className="flex flex-row items-center gap-4">
            <img src={icon} alt="Icône illustrant le point abordé" width={30} />
            <p className="font-body text-black text-lg w-[26vw]">
                {text}
            </p>
        </div>
    );
}

export default ValuePoint;