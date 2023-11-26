/* eslint-disable react/prop-types */


const BlockCard = ({blog}) => {
    const {image, host, post} = blog

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`, // Use the dynamic image URL
    };

    return (
        <div>
            <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent" style={backgroundImageStyle}>
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <img
      alt="tania andrew"
      src={host?.image}
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
     {host?.name}
    </h2>
    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      {post}
    </h5>
  </div>
</div>
        </div>
    );
};

export default BlockCard;