

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser, updateUserProfile} = useAuth()
    const axiosPublic = useAxiosPublic()
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const check = event.target.check.checked;

    console.log(name, email, photo, password, check)

    createUser(email, password)
    .then((res) => {
      const user = res.user;
      console.log(user)

      updateUserProfile(name, photo)
      .then(() => {

          // send user data to the database 
          const userInfo = {
            name: name,
            email: email,
            role: 'member',
            image: photo,
          }
          console.log(userInfo)
          axiosPublic.post('/users', userInfo )
          .then( res => {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User Created Successful",
                showConfirmButton: false,
                timer: 1500
              });
              event.target.reset();
              navigate('/')
            }
          })
      });
    })

    .catch((error) => {
      console.log(error);
    });


  };


  return (
    <div className="container ">
      <div className="overly">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-purple-50">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center mt-10 lg:text-left">
              <Title>Register Now</Title>
              <p className="py-6">
                {/* <Lottie animationData={login}></Lottie> */}
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-purple-500">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-purple-500">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-purple-500">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-purple-500">Password</span>
                  </label>

                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      required
                      className="input input-bordered w-full"
                    />
                    <div className=" absolute right-3 top-3 text-xl">
                      <span onClick={() => setShowPass(!showPass)}>
                        {showPass ? (
                          <FaEyeSlash className="text-purple-400"></FaEyeSlash>
                        ) : (
                          <FaEye className="text-purple-400"></FaEye>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="check"
                      id="check"
                    />
                    <label className="text-purple-500" htmlFor="check">
                      Accept Our Trams And Conditions
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-purple-500 uppercase text-white hover:bg-purple-700">
                    register
                  </button>
                  <p className="text-purple-500 mt-4">
                    Already have an account? Please{" "}
                    <Link to="/login">
                     
                      <span className="text-purple-700 font-bold underline">
                        
                        Login
                      </span>{" "}
                    </Link>
                  </p>
                </div>
                <div>
                  {/* <SocialLogin></SocialLogin> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
