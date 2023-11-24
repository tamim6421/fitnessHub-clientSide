import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handelGoogleSignIn = () =>{
        googleSignIn()
        .then( res =>{
            console.log(res.user)

            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                role: 'member'
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate('/')
            })
        })
    }

    return (
        <div>
            <div>
              <div className="divider text-green-500 ">Or, Continue With</div>
          <button
            type="button"
            onClick= {handelGoogleSignIn}
            className="btn btn-outline btn-success w-full hover:text-white flex justify-between items-center cursor-pointer "
          >
            Google
            <FaGoogle className="w-8 h-8" />
          </button>
        </div>
        </div>
    );
};

export default SocialLogin;