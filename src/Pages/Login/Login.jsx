import Title from "../../Components/Title/Title";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";
import { Link,useLocation,useNavigate} from "react-router-dom";
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import login from '../../assets/login.svg'
import Footer from "../../Shared/Footer/Footer";
import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {signInUser, loading} = useAuth()
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const  from = location.state?.from.pathname || '/'
    


    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value

        // console.log(email, password)

              // login verification system 
        
              if(password.length < 6){
                toast.error('Password mast be at 6 character')
                return
           }
           else if (!/^(?=.*[A-Z])/.test(password)){
               toast.error('One Character should be UPPERCASE')
               return 
             }
             else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
              toast.error('Must have a special character')
              return
            }
              

        signInUser(email, password)
        .then(res =>{
          const user = res.user
          toast.success('Login Successful')
          event.target.reset()
          console.log(user)
         
          // Navigate after login 
          navigate(from, {replace: true})
        })
        .catch(error =>{
          console.log(error)
          toast.error(error.message)
        })

   
    }



    return (
         <div className="container">
        <div className="overly">
       <Navbar></Navbar>
       <Helmet>
        <title>
          FitnessHub | Login
        </title>
       </Helmet>
              <div className="mt-36 text-center">
              <Title>Login Now</Title>
              </div>
        <div className="hero  min-h-screen">
           <div className="hero-content flex-col lg:flex-row-reverse ">
             <div className="text-center lg:text-left">
               <p className=" w-3/4 mx-auto">
             <img  src={login} alt="" />
               </p>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm ">
               <form onSubmit={handleLogin} className="card-body">
                 
                 <div className="form-control ">
                   <label className="label">
                     <span className="label-text text-gray-500">Email</span>
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
                     <span className="label-text text-gray-500">Password</span>
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
                   <span onClick={()=> setShowPass(!showPass)}>
                     {
                       showPass? <FaEyeSlash className="text-gray-500"></FaEyeSlash> :  <FaEye className="text-purple-400"></FaEye>
                     }
                   </span>
                   </div>
                  </div>
                   <label className="label">
                     <a href="#" className="label-text-alt text-sm link link-hover text-gray-600">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                
                 <div className="form-control mt-6">
                   <button
                    className="btn bg-purple-600 text-white hover:bg-purple-700">
                       {loading? <TbFidgetSpinner  className='animate-spin m-auto text-2xl' />: 'LOGIN'}
                      
                      </button>
                   <p className='text-gray-600 mt-5'>New This Site? Please  <Link to='/register'>   <span className='text-stone-600 underline font-bold'>  Register</span> </Link></p>
                 </div>
                 <div>
                 <SocialLogin></SocialLogin>
                </div>
               </form>
             </div>
           </div>
         </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Login;