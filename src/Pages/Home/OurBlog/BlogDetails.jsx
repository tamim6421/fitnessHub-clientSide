import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../Shared/Navbar/Navbar";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../../../Shared/Footer/Footer";

const BlogDetails = () => {
  const { date, host, image, post, role } = useLoaderData();

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="overflow-hidden">
        <div className="h-[100px] bg-purple-600 mt-20">
          <p className="text-white font-bold text-2xl px-10 pt-9">
            Home | Blog Post
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-[1] bg-base-100 shadow-xl">
            <div className="card w-96 ">
              <figure className="px-10 pt-10" data-aos="fade-up-left">
                <img src={host?.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title" data-aos="fade-up-left">Author</h2>
                <h2 className="card-title" data-aos="fade-up-left">{host?.name}</h2>
                <p data-aos="fade-up-left">{host?.email}</p>
                <div className="card-actions text-3xl " data-aos="fade-up-left">
                  <FaFacebook className="text-blue-500"></FaFacebook>
                  <FaLinkedin className="text-blue-500"></FaLinkedin>
                  <FaInstagram className="text-orange-500"></FaInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="flex[3] ">
            <div className="mt-10">
            <div>
            <p className="mb-5 px-3 text-lg font-semibold">{date.slice(0, 10)}</p>

<p className="mb-3 px-3">{post}</p>
            </div>

              <div>
                <div>
                  <div className="card">
                    <figure data-aos="fade-left">
                      <img   className="max-h-[400px] box" src={image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <p className="mt-10" data-aos="fade-up-left">
                        Fitness clubs, also known as gyms or health clubs, are
                        facilities that provide a variety of equipment, classes,
                        and services to help individuals achieve and maintain
                        physical fitness. These establishments have become
                        increasingly popular as people recognize the importance
                        of regular exercise for overall health and well-being.
                        Here are some key aspects of fitness clubs
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>

                 
          <Link to='/forum'> 
          <button data-aos="fade-up" className="btn bg-red-600 text-lg text-white px-10 mt-10 block mx-auto btn-outline">Explore Our Forums Posts</button>
          </Link>


          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
