import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TrainerCard from "./TrainerCard";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Trainer = () => {
    const axiosPublic = useAxiosPublic()
   

    const {data:trainers, isLoading, refetch} = useQuery({
        queryKey: ['trainers'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/accepttrainer')
            console.log(res.data)
            return res.data
            
        }
      })
    
      // if (isLoading) {
      //   return <Loader></Loader>
      // }
    
      console.log(trainers)


    return (
        <div>
          <Navbar></Navbar>
          <Helmet>
            <title>
              FitnessHub | Trainer
            </title>
          </Helmet>

          <div className="mt-20 p-5 overflow-hidden">

            <div className="pt-10">
               <div className="" data-aos="fade-up">
               <SectionTitle title={'To be a '} title1={"Trainer ?"} des={'Remember that the specific skills required may vary depending on the role within the gym'}></SectionTitle>
               </div>
            </div>

           <div className="pt-10 text-center"  data-aos="fade-down">
           <Link to='/beTrainer'>
           <button className="btn bg-purple-500 hover:bg-purple-700 text-white uppercase px-10 ">be a trainer</button>
           </Link>
           </div>

            <div className="mt-20" data-aos="fade-right">
                <Title>Ours Trainers</Title>
                <p className="w-3/6 text-gray-500">
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
                
                <Footer></Footer>
        </div>
    );
};

export default Trainer;