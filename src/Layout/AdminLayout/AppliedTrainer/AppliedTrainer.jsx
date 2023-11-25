import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const AppliedTrainer = () => {
    const axiosPublic = useAxiosPublic()

    const {data:trainer} = useQuery ({
        queryKey: ['trainer'],
        queryFn: async () =>{
            const res = await axiosPublic.get('')
        }
    })
    return (
        <div>
          <div className="text-center mt-20 mb-10">
            <Title> Total Applied Trainer</Title>
          </div>

          <div>

          </div>
        </div>
    );
};

export default AppliedTrainer;