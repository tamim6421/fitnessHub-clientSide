import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Components/Title/Title";
import { Link } from "react-router-dom";



const RecommendedClasses = () => {
    const axiosPublic = useAxiosPublic()

    const {data:allClass = []} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/getclass')
            return res.data
        }
    })

    const showClass = allClass.slice(0, 6)


    return (
        <div className="md:px-20 overflow-hidden">
            <div className="text-center my-20 ">
                <Title>Recommended Class For You </Title>
            </div>
            <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

{
        showClass?.map((classItem, i) => (
            <Link to='/classes' key={i} >
            <div className=" card bg-base-100 shadow-xl"  data-aos="fade-right">
                <figure className="px-10 pt-10 box">
                    <img src={classItem?.image} alt={classItem.title} className="rounded-xl h-[200px] object-cover w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classItem?.className}</h2>
                   
                  
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

export default RecommendedClasses;