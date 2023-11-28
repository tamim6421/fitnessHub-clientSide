import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title/Title";
import AppliedCard from "./AppliedCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AppliedTrainer = () => {
   
    const axiosSecure = useAxiosSecure()

    const {data:trainers = []} = useQuery ({
        queryKey: ['trainers'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/trainers')
            return res.data
        }
    })
    

    console.log(trainers)

    return (
        <div className="px-20">
          <div className="text-center mt-20 mb-10 ">
            <Title> Total Applied Trainer</Title>
          </div>

          <div>
          
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {
                    trainers?.map(trainer => <AppliedCard key={trainer._id} trainer={trainer}></AppliedCard> )
                } 
            </div>
          </div>
        </div>
    );
};

export default AppliedTrainer;


