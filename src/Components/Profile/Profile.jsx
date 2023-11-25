import { Helmet } from "react-helmet-async"
import useAuth from "../../Hooks/useAuth"
import useUserRole from "../../Hooks/useUserRole"

const Profile = () => {
    const { user } = useAuth()
    const {userRole} = useUserRole()

    console.log(userRole[0]?.role)
  
    
    return (
      <div className='flex justify-center items-center h-screen'>
        <Helmet>
          <title> FitnessHub | Profile</title>
        </Helmet>
        <div className='bg-white shadow-lg rounded-2xl w-3/4 h-[70vh]'>
          <img
            alt='profile'
            src='https://i.ibb.co/Y20dfVz/pexels-pixabay-260352.jpg'
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
  
            <p className='p-2 px-4 text-xs text-white bg-gray-600 rounded-full'>
              {userRole[0]?.role && userRole[0]?.role.toUpperCase()}
            </p>
            <p className='mt-2 text-xl font-medium text-gray-800 '>
              User Id: {user?._id}
            </p>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
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
  
                <div>
                  <button className='bg-gray-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-gray-700 block mb-1'>
                    Update Profile
                  </button>
                  <button className='bg-gray-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-gray-700'>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Profile;