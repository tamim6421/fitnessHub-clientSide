import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";
import Navbar from "../../Shared/Navbar/Navbar";

const Dashboard = () => {
  const { userRole } = useUserRole();
  return (
    <div>
        <Navbar></Navbar>
      <div className="flex mt-20 flex-col md:flex-row">
        <div className="flex-[1] text-start md:text-center md:fixed md:z-10 md:h-[100vh]  bg-base-100 shadow-lg">

          

          <ul className="mt-10 px-5 space-y-5">

          {userRole[0]?.role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 font-bold text-xl  "
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allSubscriber"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-900 font-bold text-xl "
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    All Subscribers 
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
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    All Trainers 
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
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    Applied Trainer 
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
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    Balance
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                    Trainer Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageMember"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                   Profile Setting
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
                        ? "text-purple-500 text-lg bg-purple-50 font-semibold"
                        : "hover:bg-purple-100  text-purple-600 text-lg"
                    }
                  >
                  Add New Forum
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
