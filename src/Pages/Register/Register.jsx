import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import img from "../../assets/register.svg";
import Footer from "../../Shared/Footer/Footer";
import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
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

    // register
    if (password.length < 6) {
      toast.error("Password mast be at 6 character");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("One Character should be UPPERCASE");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Must have a special character");
      return;
    } else if (!check) {
      toast.error("Please Accept Our Trams And Conditions");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        updateUserProfile(name, photo).then(() => {
          // send user data to the database
          const userInfo = {
            name: name,
            email: email,
            role: "member",
            image: photo,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User Created Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              event.target.reset();
              navigate("/");
            }
          });
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

        <Helmet>
        <title>
          FitnessHub | Register
        </title>
       </Helmet>
        <div className="text-center mt-36">
          <Title>Register Now</Title>
        </div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center mt-10 lg:text-left">
              <p className="py-6 w-3/4 mx-auto">
                <img src={img} alt="" />
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-purple-500">
                      User Name
                    </span>
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
                    <span className="label-text text-purple-500">
                      Photo URL
                    </span>
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
                  {loading? <TbFidgetSpinner  className='animate-spin m-auto text-2xl' />: 'REGISTER'}
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
                <div>{/* <SocialLogin></SocialLogin> */}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
