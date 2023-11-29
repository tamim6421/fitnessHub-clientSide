import { Link, NavLink } from "react-router-dom";
import useAuth from './../../Hooks/useAuth';
import { useEffect, useState } from "react";
import useUserRole from "../../Hooks/useUserRole";
import { FaEdit } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";


const Navbar = () => {
    const {logOut, user,} = useAuth()
    const {userRole} = useUserRole()
   
    
  

  // console.log(userRole[0]?.role)

    // for dark theme 
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = e =>{
      if(e.target.checked){
        setTheme("dark")
      }else{
        setTheme("light")
      }
    }
  
    useEffect( () =>{
      localStorage.setItem("theme", theme)
      const localTheme = localStorage.getItem("theme")
      document.querySelector("html").setAttribute("data-theme", localTheme)
    } ,[theme])
  
  
    const links = <>

        <li>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
{/* <FaHome></FaHome>  */}
 Home
</NavLink>
        </li>
        <li>
        <NavLink
  to="/gallery"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
Gallery
</NavLink>
        </li>
        <li>
        <NavLink
  to="/trainer"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
  Trainer
</NavLink>
        </li>
        <li>
        <NavLink
  to="/classes"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
  Classes
</NavLink>
        </li>
        <li>
        <NavLink
  to="/forum"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
  Forum
</NavLink>
        </li>
       
        <li>
        <NavLink
  to="/contract"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
  }
>
 Contact Us
</NavLink>
        </li>


        {/* if user role is admin  */}

        {
          
          userRole[0]?.role === 'admin' &&  <>

                <li>
                    <NavLink
              to="/dashboard/adminHome"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-700 text-xl bg-purple-50 font-bold" : "hover:bg-gray-100 text-black text-lg"
              }
            >
            Dashboard
            </NavLink>
          </li>
      
          </>
          

        }

        {/* if user role is trainer  */}

        {
            userRole[0]?.role === 'trainer' &&  <>

            <li>
                <NavLink
          to="/dashboard/trainerHome"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-purple-500 text-lg bg-purple-50 font-semibold" : "hover:bg-gray-100 text-black text-lg"
          }
        >
        Dashboard
        </NavLink>
      </li>
  
      </>
      
        }

        {/* member only dashboard  */}

         {/* if user role is trainer  */}

         {
            userRole[0]?.role === 'member' &&  <>

            <li>
                <NavLink
          to="/dashboard/memberHome"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-purple-500 text-lg bg-purple-50 font-semibold" : "hover:bg-gray-100 text-black text-lg"
          }
        >
        Dashboard
        </NavLink>
      </li>
  
      </>
      
        }
    </>
    return (
        <div className=" ">
        <div className="navbar fixed  max-w-[1250px] z-10 mx-auto bg-opacity-90 bg-white top-0 w-full  shadow-lg px-5 font-semibold ">
        <div className="navbar-start">

       

        <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            
            <div className="w-full navbar">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
                
            <Link to='/'><button className=" normal-case md:px-4  font-extrabold text-2xl">
              <div className="flex">
              <img src="https://i.ibb.co/WPBcGmW/fitness-logo.png" alt="" className="w-[30px]" />
              <h1 className="text-purple-700">
         
         Fitness<span className=" text-yellow-400 text-xl md:text-3xl">Hub</span> </h1>
              </div>
      
        </button></Link>
            

            </div>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
        {links}
            </ul>
        </div>
        </div>






        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
        </div>
        <div className="navbar-end">

  {/* for dark theme */}
  <div className="text-purple-500">
  <label className="swap swap-rotate">

  <input onChange={handleToggle} type="checkbox" />
  
  <svg className="swap-on fill-current w-8 h-8 mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
{
  user ? <div> 
      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      {
        user.photoURL === null ?  <img  src="https://i.ibb.co/hXYvv9g/girl2.jpg" alt={user.displayName} /> :
        <img src={user.photoURL } alt={user.displayName} />
      }
      
    </div>
  </label>


  <div tabIndex={0} className="menu menu-sm dropdown-content w-[200px] md:w-[300px] text-sm  space-y-2 mt-3 z-[1] shadow bg-purple-50 ">
          <p
            
            className='w-full object-cover mb-4 bg-purple-200 rounded-t-lg h-10'
          />
          <div className='flex flex-col items-center justify-center -mt-16'>
            <a href='#' className='relative h-[90px] w-[90px]  avatar online block'>
              <img
                alt='profile'
                src={user?.photoURL}
                className='mx-auto object-cover rounded-full h-[90px] w-[90px]  border-2 border-white '
              />
            </a>
  
            <p className='p-2 px-4 text-xs text-white bg-green-600 rounded-full'>
              {userRole[0]?.role && userRole[0]?.role.toUpperCase()}
            </p>
            <p className='mt-2 text-xl font-medium text-purple-800 '>
              {user?.displayName}
            </p>
            <span className='font-bold text-black '>{user?.email}</span>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-purple-600 '>
               
                
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
                 
                  <div className="">

                  <Link to='/dashboard/memberProfile'>
                  <button className="btn bg-purple-500 text-white hover:bg-purple-700 w-full ">
                  
                  Update Profile <FaEdit className="text-white text-2xl" />
                  </button>
                  </Link>
                  
                  <button
                   onClick={logOut}
                   className="btn bg-purple-500 text-white hover:bg-purple-700 w-full ">
                  Logout
                    <TbLogout className="text-2xl"/>
                  </button>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
</div>

  </div> : <Link to='/login'> <button className="rounded-lg btn-sm text-white bg-purple-500 ">lOGIN</button> </Link>

}

</div>
</div>
    </div>
    );
};

export default Navbar;

{/* <ul tabIndex={0} className="menu menu-sm dropdown-content text-sm  space-y-2 mt-3 z-[1] p-2 shadow bg-purple-200 ">
    <li>
    {
              user.displayName == null ? <button className="btn btn-sm text-white bg-purple-500"> User </button> :<button className="btn btn-sm  text-white bg-purple-500">  {user.displayName} </button>
            }
          </li>
          <li>
          <button className="btn btn-sm text-white bg-purple-400" > {user.email} </button>
          </li>
          <li className="w-full">
           <button
          onClick={logOut}
            className="btn btn-sm text-white  w-full bg-purple-400" > LogOut </button>
          </li>
  </ul> */}