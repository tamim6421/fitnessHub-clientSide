import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaHome, FaPeopleCarry } from "react-icons/fa";
import { FaArrowsDownToPeople, FaMoneyBillTrendUp, FaPeopleGroup, FaPeopleRobbery } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdAddPhotoAlternate, MdClass, MdLocalActivity, MdManageAccounts, MdOutlineSportsGymnastics, MdSettings, MdSupport, MdWifiProtectedSetup } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
  const { userRole } = useUserRole();
  return (
    <div>
        <Navbar></Navbar>
        <Helmet>
          <title>
            FitnessHub | Dashboard
          </title>
        </Helmet>
      <div className="flex mt-20 flex-col md:flex-row">
        <div className="flex-[1]  md:w-[250px]  md:fixed md:z-10 md:h-[100vh]  bg-base-100 shadow-lg">

          

          <ul className="mt-10 px-5 mb-5 text-center md:text-start space-y-5">

          {userRole[0]?.role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        :  " text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    <p className="flex items-center gap-2 ">
                    <FaHome className="text-gray-500 text-2xl"></FaHome>  Admin Home
                    </p>
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allSubscriber"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg "
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    
                    <p className="flex items-center gap-2">
                    <FaPeopleGroup className="text-gray-500 text-2xl"></FaPeopleGroup>All Subscribers 
                    </p>
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allTrainers"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                   
                    <p className="flex items-center gap-2">
                 <FaPeopleRobbery  className="text-gray-500 text-2xl"></FaPeopleRobbery>    All Trainers 
                    </p>
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/appliedTrainer"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                   
                    <p className="flex items-center gap-2">
                 <FaArrowsDownToPeople  className="text-gray-500 text-2xl"></FaArrowsDownToPeople>    Applied Trainers 
                    </p>
                    
                  </NavLink>
                </li>
             
                <li>
                  <NavLink
                    to="/dashboard/balance"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg "
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    
                    <p className="flex items-center gap-2">
                   <FaMoneyBillTrendUp className="text-gray-500 text-2xl"></FaMoneyBillTrendUp>  Balance 
                    </p>
                  </NavLink>
                </li>
              </>
            )}




            {/* trainer only dashboard  */}
            {userRole[0]?.role === "trainer" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/trainerHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    <FaHome className="text-2xl"></FaHome>
                    Trainer Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageSlots"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                     <MdWifiProtectedSetup  className="text-2xl"></MdWifiProtectedSetup>
                    Manage Slots
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageMember"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    <MdManageAccounts   className="text-2xl"></MdManageAccounts>
                     
                    Manage Member 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addNewClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg "
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                    <MdOutlineSportsGymnastics    className="text-2xl"></MdOutlineSportsGymnastics>
                   Add New Class
                  </NavLink>
                </li>
              </>
            )}

            
            {/* member only dashboard  */}
            
            {userRole[0]?.role === "member" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/memberHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg "
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                        <p className="flex items-center gap-2 ">
                    <FaHome className="text-gray-500 text-2xl"></FaHome> User Home
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/activity"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                      <p className="flex items-center gap-2 ">
                    <MdLocalActivity className="text-gray-500 text-2xl"></MdLocalActivity> Activity Log
                    </p>
                 
                    
                  </NavLink>
                </li>
            
                <li>
                  <NavLink
                    to="/dashboard/recommendedClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm"
                    }
                  >
                      <p className="flex items-center gap-2 ">
                    <MdClass className="text-gray-500 text-2xl"></MdClass>Suggest Classes
                    </p>
                 
                  </NavLink>
                </li>
            
                <li>
                  <NavLink
                    to="/dashboard/myPayment"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm"
                    }
                  >
                      <p className="flex items-center gap-2 ">
                    <MdClass className="text-gray-500 text-2xl"></MdClass>Payment History
                    </p>
                 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/memberProfile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                     <p className="flex items-center gap-2 ">
                    <MdSettings className="text-gray-500 text-2xl"></MdSettings>    Profile Setting
                    </p>
                 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contract"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                     <p className="flex items-center gap-2 ">
                    <MdSupport className="text-gray-500 text-2xl"></MdSupport> Help & Support
                    </p>
                 
                  </NavLink>
                </li>
              </>
            )}

            {/* common routs admin and trainer  */}
            {
              (userRole[0]?.role === "admin" || userRole[0]?.role === "trainer") &&(
                <>
                 <li>
                  <NavLink
                    to="/dashboard/newForum"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 btn btn-sm font-bold  bg-purple-100 text-lg"
                        : "text-gray-600 hover:text-purple-900 text-lg btn btn-sm hover:font-bold"
                    }
                  >
                     <p className="flex items-center gap-2">
                    <MdAddPhotoAlternate  className="text-gray-500 text-3xl"></MdAddPhotoAlternate >  Add  Forum 
                    </p>
             
                  </NavLink>
                </li>
                </>
              )
            }

          </ul>
        </div>

        <div className="flex-[5] md:ml-[170px]">
          <Outlet></Outlet>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
