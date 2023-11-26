import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";
import AddClass from "./AddClass";
import DailyRutine from "./DailyRutine";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Classes = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    
    // get all user 
    const {data:allUser = [], isLoading: userLoading,} = useQuery({
        queryKey: ['allUser'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/alluser')
            return res.data
        }
    })


    // get all class 
    const {data:allClass = [], isLoading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/getclass')
            return res.data
        }
    })
    console.log(allUser)

    const getRole = allUser?.find(allUser => allUser.email == user?.email )
    // const candideEmail = getEmail[0]?._id

    
    if(isLoading){
    return <p className="text-center my-36">Loading.......</p>
    }


    return (
        <div className="">
            <Navbar></Navbar>
            <div className="mt-20">

            <div className="text-center mb-10 mt-36">
                <Title>Weekly  Schedule </Title>
            </div>

            <div className="w-3/5 mx-auto">
            <DailyRutine></DailyRutine>
            </div>

        {/* added a new class conditional button  */}

        <div>
            {
               user && getRole?.role == 'trainer' && 
                <div className="pt-20 mb-10">
                <Link to='/addClass'>
                <button className="bg-gray-600 btn text-white text-lg px-6 btn-outline block mx-auto">Added a New Class </button>
                </Link>
                
             </div>
            }
        </div>
        


         {/* show class card  */}
         <div className="text-center my-10">
            <Title>Our Classes</Title>
         </div>
         <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

            {
                    allClass?.map(classItem => (
                        <div className="card bg-base-100 shadow-xl" key={classItem.id}>
                            <figure className="px-10 pt-10">
                                <img src={classItem?.image} alt={classItem.title} className="rounded-xl h-[200px] object-cover w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{classItem?.className}</h2>
                               
                                <div className="card-actions">
                                 <Link to={`/classDetails/${classItem._id}`}>
                                 <button className="btn btn-sm bg-gray-600 btn-outline text-white">See Details</button>
                                 </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

         </div>

            </div>
        
        </div>
    );
};

export default Classes;