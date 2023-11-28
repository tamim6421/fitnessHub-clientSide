

const SectionTitle = ({title, title1, des}) => {
    return (
        <div className="mt-20 text-center mb-5">
            <h1 className="text-3xl md:text-5xl font-bold text-purple-400 drop-shadow-md">{title} <span className="text-purple-800">{title1} </span></h1>
            <p className="text-xl mt-3">{des}</p>
        </div>
    );
};

export default SectionTitle;