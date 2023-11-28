import { Link, useLoaderData } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import Navbar from "../../../Shared/Navbar/Navbar";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TrainerBook = () => {
    const slotData = useLoaderData()
    const [infos, setInfos] = useState()
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    useEffect(() =>{
      fetch('/price.json')
      .then( res => res.json())
      .then( data =>{
        console.log(data)
        setInfos(data)
      })
    } ,[])
    console.log(slotData)
    
    const slotBooking = async (info) => {
      console.log(info)
      try {
        const bookData = {
          user: user,
          trainerName: '',
          package: info.cardName,
          price: info.price,
        };
    
        console.log(slotData._id);
    
        const response = await axiosSecure.put(`/putslot/${slotData?._id}`, bookData);
        
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    


    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-20">

                <div className="text-center pt-20 mb-10">
                    <Title > Booked Your Package </Title>
                </div>

                <div className="grid grid-cols-1 gap-6 w-full mx-auto md:grid-cols-3">

                  {
                    infos?.map( (info, i) =>     <div key={i} className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-orange-400 to-purple-600 bg-clip-border p-8 text-white shadow-md shadow-purple-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                      <p className="block font-sans text-xl text-white uppercase">
                       {info?.cardName}
                      </p>
                      <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-2xl md:text-4xl">$</span>{info?.price}
                        <span className="self-end text-4xl">/mo</span>
                      </h1>
                    </div>
                    <div className="p-0">
                      <ul className="flex flex-col gap-4">
                       {
                        info?.services?.map( (ser, i) =>  <li key={i} className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                        <FaCheck />
                        </span>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                       {ser}
                        </p>
                      </li>)
                       }
                      
                      </ul>
                    </div>
                    <div className="p-0 mt-12">
                    <Link to={`/paymentBooking/${slotData._id}`}>
                    <button 
                      onClick={() =>slotBooking(info)}
                      className=" bg-white btn w-full text-lg text-purple-700">
                      
                       Join Now 
                      </button>
                    </Link>
                    </div>
                  
                    </div>  )
                  }
            

             
                </div>

            </div>
           
        </div>
    );
};

export default TrainerBook;