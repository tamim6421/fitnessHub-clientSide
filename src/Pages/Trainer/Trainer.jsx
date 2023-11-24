import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Trainer = () => {
    const axiosPublic = useAxiosPublic()
    const [trainer, setTrainer] = useState([])


    useEffect( () =>{
        axiosPublic.get('/trainers')
        .then( res => {
            console.log(res.data)
        })
    } ,[axiosPublic])


    return (
        <div>
          <Navbar></Navbar>

          <div className="mt-20">

            <div>
                <SectionTitle title={'To be a '} title1={"Trainer ?"} des={'Remember that the specific skills required may vary depending on the role within the gym'}></SectionTitle>
            </div>

           <div className="pt-10 text-center">
           <Link to='/beTrainer'>
           <button className="btn bg-gray-500 hover:bg-gray-700 text-white uppercase px-10 ">be a trainer</button>
           </Link>
           </div>

            <div className="mt-20">
                <Title>Ours Trainers</Title>
                <p className="w-3/6">
                whether it is a personal trainer, group fitness instructor, front desk staff, or management. Additionally, a positive attitude, empathy, and a passion for health and fitness are often considered valuable attributes in the fitness industry.
                </p>
            </div>

            <div>
                
            </div>

          </div>
          
        </div>
    );
};

export default Trainer;