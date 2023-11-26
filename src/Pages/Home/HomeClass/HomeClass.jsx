import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Title from "../../../Components/Title/Title";


const HomeClass = () => {
    const axiosPublic = useAxiosPublic()

    const {data:allClass = [], isLoading, refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/getclass')
            return res.data
        }
    })

    const showClass = allClass.slice(0, 6)

    // console.log(showClass)
    if(isLoading) return  <h2> Loading .......</h2>
    return (
        <div>
            <div className="text-center my-20">
                <Title>Our Classes </Title>
            </div>
            <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

{
        showClass?.map(classItem => (
            <div className="card bg-base-100 shadow-xl" key={classItem.id}>
                <figure className="px-10 pt-10">
                    <img src={classItem?.image} alt={classItem.title} className="rounded-xl h-[200px] object-cover w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{classItem?.className}</h2>
                   
                  
                </div>
            </div>
        ))
    }

</div>
            </div>

        </div>
    );
};

export default HomeClass;