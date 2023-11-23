
const Title = ({children}) => {
    return (
        <div className="relative  border-gray-400 ps-3 ">
            <h2 className="text-4xl text-gray-500 drop-shadow-xl font-bold">{children}</h2>
            <p className="absolute left-[10%] bottom-0 text-4xl md:text-8xl -z-10 opacity-5">{children}</p>
        </div>
    );
};

export default Title;