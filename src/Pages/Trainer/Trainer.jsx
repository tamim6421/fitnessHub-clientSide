import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TrainerCard from "./TrainerCard";

const Trainer = () => {
    const axiosPublic = useAxiosPublic()
   

    const {data:trainers, isLoading, refetch} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/accepttrainer')
            return res.data
        }
      })
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      console.log(trainers)


    return (
        <div>
          <Navbar></Navbar>

          <div className="mt-20 p-5">

            <div className="pt-10">
                <SectionTitle title={'To be a '} title1={"Trainer ?"} des={'Remember that the specific skills required may vary depending on the role within the gym'}></SectionTitle>
            </div>

           <div className="pt-10 text-center">
           <Link to='/beTrainer'>
           <button className="btn bg-purple-500 hover:bg-purple-700 text-white uppercase px-10 ">be a trainer</button>
           </Link>
           </div>

            <div className="mt-20">
                <Title>Ours Trainers</Title>
                <p className="w-3/6">
                whether it is a personal trainer, group fitness instructor, front desk staff, or management. Additionally, a positive attitude, empathy, and a passion for health and fitness are often considered valuable attributes in the fitness industry.
                </p>
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">

                {/* trainers card sections  */}
                {
                    trainers?.map( trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
                
            </div>

          </div>
          
        </div>
    );
};

export default Trainer;