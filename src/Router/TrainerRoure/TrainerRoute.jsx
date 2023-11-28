/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useUserRole from "../../Hooks/useUserRole";
import useAuth from "../../Hooks/useAuth";


const TrainerRoute = ({children}) => {
    const {user, loading} = useAuth()
    const {userRole, isLoading} = useUserRole()
  
    const isAdmin = userRole[0]?.role == 'trainer'
    const location = useLocation();
   
    if(loading || isLoading){
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default TrainerRoute;