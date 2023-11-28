import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaHome, FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaPeopleGroup } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";
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
        <div className="flex-[1]  md:w-[220px]  md:fixed md:z-10 md:h-[100vh]  bg-base-100 shadow-lg">

          

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
                        ? "text-purple-900 font-bold text-xl "
                        :  " text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                    <p className="flex items-center gap-2">
                    Admin Home <FaHome className="text-gray-500"></FaHome>
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                    
                    <p className="flex items-center gap-2">
                    All Subscribers <FaPeopleGroup className="text-gray-500"></FaPeopleGroup>
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
                        ? "text-purple-900 font-bold text-xl "
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                   
                    <p className="flex items-center gap-2">
                    All Trainers  <FaPeopleGroup className="text-gray-500"></FaPeopleGroup>
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
                        ? "text-purple-900 font-bold text-xl "
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold  "
                    }
                  >
                    
                    <p className="flex items-center gap-2">
                    Applied Trainer  <IoMdPeople className="text-gray-500"></IoMdPeople>
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
                        ? "text-purple-900 font-bold text-xl "
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                    
                    <p className="flex items-center gap-2">
                    Balance <FaMoneyBillTrendUp className="text-gray-500"></FaMoneyBillTrendUp>
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                   Member Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/activity"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                    Activity Log
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/memberProfile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                   Profile Setting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/recommendedClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                   Recommended Class
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
                        ? "text-purple-900 font-bold text-xl"
                        : "text-gray-600 hover:text-purple-900 text-lg hover:font-bold"
                    }
                  >
                     <p className="flex items-center gap-2">
                     Add  Forum <MdAddPhotoAlternate  className="text-gray-500"></MdAddPhotoAlternate >
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
