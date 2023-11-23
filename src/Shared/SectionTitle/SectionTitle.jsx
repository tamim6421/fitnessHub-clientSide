

const SectionTitle = ({title, title1, des}) => {
    return (
        <div className="mt-36 text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-400">{title} <span className="text-gray-800">{title1} </span></h1>
            <p className="text-xl mt-3">{des}</p>
        </div>
    );
};

export default SectionTitle;