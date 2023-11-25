import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hooks/useUserRole";

const Dashboard = () => {
  const { userRole } = useUserRole();
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-[1] bg-gray-200">

          

          <ul>

          {userRole[0]?.role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
                    }
                  >
                    All Trainers 
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
                    }
                  >
                    Manage Member 
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
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
                        ? "text-gray-500 text-lg bg-gray-50 font-semibold"
                        : "hover:bg-gray-100  text-gray-600 text-lg"
                    }
                  >
                   Profile Setting
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>

        <div className="flex-[5]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
