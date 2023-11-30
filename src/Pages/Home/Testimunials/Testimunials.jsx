import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";

const Testimunials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setReview(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mt-36 mb-10" data-aos="fade-up">
        <Title>TESTIMONIALS</Title>
        <p className="text-xl">Our client reviews</p>
      </div>

      <Swiper
        loop={true}
        autoplay={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="relative md:flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-900 shadow-none">
              <div className="relative flex flex-col md:flex-row items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden bg-transparent shadow-none rounded-xl bg-clip-border">
                <div className="md:flex gap-3  w-full">
                  <div>
                  <img
                    src={review.image}
                    alt="tania andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                  />
                  </div>
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-purple-900">
                    {review.name}
                  </h5>
                  <div className="flex items-center gap-0 5"></div>
                </div>
                <div className="flex w-full flex-col gap-0.5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
              <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-500">
                  {review.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimunials;
