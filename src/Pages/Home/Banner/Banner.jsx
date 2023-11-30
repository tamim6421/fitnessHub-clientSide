
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import { Link } from "react-router-dom";
const Banner = () => {
    return (
      <div className="containerB h-[80vh]">
      <div className="overlyB">
        <div className="text-white">
        </div>
       
        
        <div>
          <div className="hero  text-white">
            <div className="flex h-[100vh] items-center justify-center">
           
            
              <div className="md:w-3/4  mx-auto px-5">
                <h1 className="text-3xl lg:text-6xl font-bold font-rope pl-5 " data-aos="fade-down" >
                <span className='text-yellow-400' data-aos="fade-down">BUILD YOUR BODY </span> <span className='text-500'>STRONG</span>
                <br />
                <span className='text-white' data-aos="fade-left">Fitness Club</span></h1>
                 <h3 className='text-xl px-5 text-gray-300 lg:mt-3 lg:text-4xl animate__animated animate__fadeInUp ' data-aos="fade-up">
                 You Only Fail <br />
               When You Stop Trying
                 </h3>
              <div className='ml-5'>
              <Link to='/classes'>
              <button className='bg-stone-900 btn btn-outline text-white  px-8 mx-w-max text-center mt-10 rounded-lg py-2 text-lg font-semibold' data-aos="fade-down ">JOIN US NOW</button>  
              </Link>
                </div>                      
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;