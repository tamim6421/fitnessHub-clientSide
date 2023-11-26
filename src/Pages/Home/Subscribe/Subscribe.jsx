import toast from "react-hot-toast";
import Title from "../../../Components/Title/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Subscribe = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()


  const handelSubmit = (event) =>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 

    console.log(name, email)
    const subscribers = {
      userEmail: user.email,
      userName: user.displayName,
      photo: user.photoURL,
      name: name ,
      email: email ,
      date: new Date()
    }

    // send data to the database 
    axiosPublic.post('/subscriber', subscribers)
    .then( res =>{
      console.log(res.data)
      if(res.data.insertedId){
        toast.success('Subscribe Successful')
        event.target.reset();
      }
    })

  }


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
            <div className="card flex-shrink-0 w-full bg-purple-100 shadow-md max-w-sm ">
              <form onSubmit={handelSubmit} className="card-body" data-aos="fade-down" >
                <h1 className="text-3xl text-purple-500 font-bold">Subscribe Our Newsletter <br /> <span className=" text-purple-800 text-2xl font-bold">And Stay Updated</span></h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-purple-600 text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-purple-600  text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input Your Email"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
               
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input  className="btn text-white rounded-full text-lg bg-purple-600 hover:bg-purple-700" type="submit" value="Subscribe" />
                 
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Subscribe;