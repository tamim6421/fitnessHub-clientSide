import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const {user, loading} = useAuth()
    const axiosPublic = useAxiosPublic()

    const {data: userRole = [], isLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/allusers/${user?.email}`)
            return res.data
        }
    })
    
   
    return {userRole, isLoading}
};

export default useUserRole;
