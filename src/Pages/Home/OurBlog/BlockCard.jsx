/* eslint-disable react/prop-types */

const BlockCard = ({ blog }) => {
  const { image, host, post } = blog;

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="overflow-hidden" data-aos="fade-up">
      <div className=" box relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-purple-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent"
          style={backgroundImageStyle}
        >
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/90 via-black/80"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <img
            alt="tania andrew"
            src={host?.image}
            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          />
          <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-gray-300 antialiased">
            {host?.name}
          </h2>
          <h5 className="block mb-4 font-sans antialiased font-semibold leading-snug tracking-normal text-gray-400" data-aos="fade-up">
            {post}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
