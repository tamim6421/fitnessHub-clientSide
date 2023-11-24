import Title from "../../../Components/Title/Title";


const Subscribe = () => {
    return (
        <div>
            <div>
                <div className="text-center mt-36 mb-16">
                    <Title>Subscribe Our Website</Title>
                </div>
            </div>
            <div className="hero min-h-screen">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="text-center  lg:text-left" data-aos="fade-up" >
              <img src="https://i.ibb.co/Js5qd7W/pexels-oswald-yaw-elsaboath-11246559.jpg" alt=""  className="rounded-lg w-2/4 mx-auto " />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form className="card-body" data-aos="fade-down" >
                <h1 className="text-3xl text-gray-500 font-bold">Subscribe Our Newsletter <br /> <span className=" text-gray-800 text-2xl font-bold">And Stay Updated</span></h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-600 text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-600  text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Input Your Email"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
               
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-white rounded-full bg-gray-500 hover:bg-gray-700">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Subscribe;