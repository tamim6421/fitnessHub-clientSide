import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AppliedCard from "./AppliedCard";


const AppliedTrainer = () => {
    const axiosPublic = useAxiosPublic()

    const {data:trainers = []} = useQuery ({
        queryKey: ['trainers'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/trainers')
            return res.data
        }
    })

    console.log(trainers)

    return (
        <div className="px-6">
          <div className="text-center mt-20 mb-10 ">
            <Title> Total Applied Trainer</Title>
          </div>

          <div>
            <p>applied {trainers.length}</p>
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


