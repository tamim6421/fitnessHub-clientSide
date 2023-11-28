import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Components/Title/Title";
import Loader from "../../../Components/Loader/Loader";
import { Link } from "react-router-dom";


const HomeClass = () => {
    const axiosPublic = useAxiosPublic()

    const {data:allClass = [], isLoading} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/getclass')
            return res.data
        }
    })

    const showClass = allClass.slice(0, 6)

    // console.log(showClass)
    if(isLoading) return  <p> <Loader></Loader> </p>
    return (
        <div>
            <div data-aos="fade-up" className="text-center my-20">
                <Title>Our Classes </Title>
            </div>
            <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

{
        showClass?.map((classItem, i) => (
           <Link key={i} to='/classes'>
            <div className="card box cursor-pointer bg-base-100 shadow-xl" >
                <figure className="px-10 pt-10">
                    <img src={classItem?.image} alt={classItem.title} className="rounded-xl h-[200px] object-cover w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-600">{classItem?.className}</h2>
                   
                  
                </div>
            </div>
           </Link>
        ))
    }

</div>
            </div>

        </div>
    );
};

export default HomeClass;