import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>

<div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg" className="w-full rounded-xl" />
          <div className="absolute flex items-center h-full  left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3 ">
              <h3 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
              Transform Your Body, Mind, And Life Today
              </p>
              <div>
                
                <button className="btn btn-outline btn-warning">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg" className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3 ">
              <h3 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eaque unde doloribus voluptate qui cum m?
              </p>
              <div>
                
                <button className="btn btn-outline btn-warning">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg" className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3 ">
              <h3 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eaque unde doloribus voluptate qui cum m?
              </p>
              <div>
                
                <button className="btn btn-outline btn-warning">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg" className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/3 ">
              <h3 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eaque unde doloribus voluptate qui cum m?
              </p>
              <div>
                
                <button className="btn btn-outline btn-warning">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>











    {/* <Carousel autoPlay={false} infiniteLoop={true}>
                <div className='relative'>
                    <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg" />
                    <h3 className='text-4xl absolute top-20 left-0'>Hello there</h3>
                </div>
                <div>
                    <img src="https://i.ibb.co/TMSQHSS/pexels-william-choquette-1954524.jpg"/>
                   
                </div>
               
            </Carousel> */}
        </div>
    );
};

export default Banner;