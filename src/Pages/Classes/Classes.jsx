import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";
import AddClass from "./AddClass";
import DailyRutine from "./DailyRutine";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader/Loader";
import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";


const Classes = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    
    // get all user 
    const {data:allUser = []} = useQuery({
        queryKey: ['allUser'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/alluser')
            return res.data
        }
    })


    // get all class 
    const {data:allClass = [], isLoading} = useQuery({
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
    return <Loader></Loader>
    }


    return (
        <div className="">
            <Navbar></Navbar>
            <Helmet>
                <title>
                    FitnessHub | Classes
                </title>
            </Helmet>
            <div className="mt-20 overflow-hidden">

            <div className="text-center mb-10 mt-36" data-aos="fade-up">
                <Title>Weekly  Schedule </Title>
            </div>

            <div className="md:w-3/5 mx-auto p-1" data-aos="fade-up">
            <DailyRutine></DailyRutine>
            </div>

        {/* added a new class conditional button  */}

        <div>
            {
               user && getRole?.role == 'trainer' && 
                <div className="pt-20 mb-10" data-aos="fade-up">
                <Link to='/addClass'>
                <button className="bg-purple-600 btn text-white text-lg px-6 btn-outline block mx-auto">Added a New Class </button>
                </Link>
                
             </div>
            }
        </div>
        


         {/* show class card  */}
         <div className="text-center my-10" >
            <Title>Our Classes</Title>
         </div>
         <div className="grid gap-5 grid-cols-1 md:grid-cols-3" data-aos="fade-up">

            {
                    allClass?.map((classItem, i) => (
                        <div  className="card bg-base-100 box shadow-xl" key={i}>
                            <figure className="px-10  pt-10">
                                <img src={classItem?.image} alt={classItem.title} className="rounded-xl h-[200px] object-cover w-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{classItem?.className}</h2>
                               
                                <div className="card-actions">
                                 <Link to={`/classDetails/${classItem._id}`}>
                                 <button className="btn btn-sm bg-purple-600 btn-outline text-white">See Details</button>
                                 </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

         </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;