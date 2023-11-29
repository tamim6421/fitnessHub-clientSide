import { Helmet } from "react-helmet-async"
import useAuth from "../../Hooks/useAuth"
import useUserRole from "../../Hooks/useUserRole"
import { Link } from "react-router-dom"
import { MdLogout } from "react-icons/md"
import { FaEdit } from "react-icons/fa"

const Profile = () => {
    const { user, logOut } = useAuth()
    const {userRole} = useUserRole()

    // console.log(userRole[0])
  
    
    return (
      <div className='flex justify-center items-center h-screen'>
        <Helmet>
          <title> FitnessHub | Profile</title>
        </Helmet>
        <div className='bg-white shadow-lg rounded-2xl w-3/4 h-[70vh]'>
          <img
            alt='profile'
            src='https://i.ibb.co/ZxMKLQr/Screenshot-6.png'
            className='w-full object-cover mb-4 rounded-t-lg h-48'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a href='#' className='relative block'>
              <img
                alt='profile'
                src={user?.photoURL}
                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
              />
            </a>
  
            <p className='p-2 px-4 text-xs text-white bg-green-600 rounded-full'>
              {userRole[0]?.role && userRole[0]?.role.toUpperCase()}
            </p>
            <p className='mt-2 text-xl font-medium text-purple-800 '>
              User : {user?.displayName}
            </p>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-purple-600 '>
                <p className='flex flex-col'>
                  Name
                  <span className='font-bold text-black '>
                    {user?.displayName}
                  </span>
                </p>
                <p className='flex flex-col'>
                  Email
                  <span className='font-bold text-black '>{user?.email}</span>
                </p>
                <p className='flex flex-col'>
                 Phone Number
                  <span className='font-bold text-black '>
                    {userRole[0]?.number}
                  </span>
                </p>
                <p className='flex flex-col'>
                  Address
                  <span className='font-bold text-black '>{userRole[0]?.address}</span>
                </p>
  
                <div className="mt-5">
                  <Link >
                  <button className='bg-purple-500 px-4 text-lg py-1 flex items-center rounded-lg text-white cursor-pointer hover:bg-purple-700  mb-1'>
                  <FaEdit></FaEdit>  Update Profile
                  </button></Link>
                 <div className="flex">
                  <p>
                  
                  </p>
                 <button
                 onClick={logOut}
                  className='bg-purple-500 flex items-center gap-2 text-lg px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-purple-700'>
                 <MdLogout></MdLogout> Logout
                  </button>

                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Profile;