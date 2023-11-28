import { AiTwotoneMail } from "react-icons/ai";
import Title from "../../Components/Title/Title";
import Navbar from "../../Shared/Navbar/Navbar";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";



const ContractUs = () => {
    return (
        <div>
            <Helmet>
            <title>
               FitnessHub | Contact Us
                </title>
            </Helmet>

            <Navbar></Navbar>
            
            <div className="text-center  mt-36">
         <Title> Contact With Us</Title>
            <div>
            <div className="grid gap-2 md:grid-cols-3 mt-20">
        <div className="card  "  data-aos="fade-down">
          <figure className="px-10 pt-5">
          <BiSolidPhoneCall className="text-5xl text-green-500"></BiSolidPhoneCall>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-green-500">Call Us</h2>
            <p>+987 092 291 091</p>
            <p>+94987 2923421 0941</p>
          </div>
        </div>
        <div className="card  "  data-aos="fade-up">
          <figure className="px-10 pt-10">
         
        <AiTwotoneMail className="text-5xl  text-green-500"></AiTwotoneMail>
          </figure>
          <div className="card-body items-center text-center">
          
            <h2 className="card-title text-green-500">Connect With Email</h2>
            <p>support@templaza.com</p>
            <p>support@templaza.com</p>
          </div>
        </div>
        <div className="card"  data-aos="fade-up">
          <figure className="px-10 pt-10">
         <FaLocationDot className="text-5xl  text-green-500"></FaLocationDot>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-green-500">Our Office Location</h2>
            <p>Electrical Product Company</p>
            <p>London, UK, 10, Friks, Avenue</p>
          </div>
        </div>
      </div>

      <div>
      <p className="text-4xl text-center text-gray-500 font-semibold mt-36 mb-12 " data-aos="fade-down">
        <Title>  Send Your Feedback</Title>
     
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
      </p>

        <div className="hero min-h-screen">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="text-center  lg:text-left" data-aos="fade-up" >
              {/* <img src={contact} alt=""  className="rounded-lg w-3/4 mx-auto " /> */}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form className="card-body" data-aos="fade-down" >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-green-500 text-lg">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Input Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-green-500  text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Input Your Email"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                  <div className="relative w-full min-w-[200px]">
                    <textarea
                      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-green-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-pink-300 placeholder-shown:border-t-red-500 focus:border-2 focus:border-pink-300 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    ></textarea>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Text here
                    </label>
                  </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white bg-green-500 hover:bg-green-600">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="my-20">
        <p className="text-4xl text-center text-gray-500 font-semibold mt-36 mb-12 " data-aos="fade-down">
        <Title>  Our Office</Title>
        <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
      </p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
            <div className="card  " data-aos="fade-down">
              <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-green-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Dhaka</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
            <div className="card  " data-aos="fade-down">
              <figure className="px-10 pt-10">
              <MdOutlineHomeWork className="text-5xl text-green-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Rajshahi</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
            <div className="card  "data-aos="fade-down">
              <figure className="px-10 pt-10">
               <MdOutlineHomeWork className="text-5xl text-green-500"></MdOutlineHomeWork>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up">
                <h2 className="card-title">Pabna</h2>
                <p>5489 2nd ave, Road no-23</p>
                <p>House No-37a</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContractUs;