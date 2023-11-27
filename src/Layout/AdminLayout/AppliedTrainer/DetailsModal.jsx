import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";


import emailjs from '@emailjs/browser';
import { useRef } from "react";
import useAuth from "../../../Hooks/useAuth";



const DetailsModal = () => {
    const {user } = useAuth()
    const  allInfo = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const form = useRef();

   
    const {name, image, trainerEmail, age, status, icons, days, skills, time,yearOfExperience, _id ,role } = allInfo
    console.log(status)

    const {data:allUser = [], isLoading, isError, refetch} = useQuery({
        queryKey: ['allUser'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/alluser')
            return res.data
        }
    })


    // hendale  loading 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }


    // console.log(allUser)
    const getEmail = allUser?.filter(user => user.email == trainerEmail )
    const candideEmail = getEmail[0]?._id
    // console.log(getEmail)

    
    let slotArray = []

    // const makeSlot =( ) =>{
         
    //     for(let i = 0; i < days.length ; i ++){
    //         for( let j = 0 ; j < time.length; j ++){
    //             const slot = {
    //                 trainerId: _id,
    //                 day: days[i],
    //                 time: time[j],
    //                package: null ,
    //                price: null,
    //                user: null,
    //             }
    //             slotArray.push(slot)
    //         }
    //     }
    //     // console.log(slotArray)
    // }






    const handelAccept = async (_id) =>{


        for(let i = 0; i < days.length ; i ++){
            for( let j = 0 ; j < time.length; j ++){
                const slot = {
                    trainerId: _id,
                    trainerName: name,
                    email:trainerEmail,
                    status: 'pending',
                    day: days[i],
                    time: time[j],
                   package: null ,
                   price: null,
                   user: null,
                }
                slotArray.push(slot)
            }
        }
     
        axiosSecure.post('/slot',slotArray )
        .then( res =>{
            console.log(res.data)
        })
            // make trainer 
            axiosSecure.patch(`/users/role/${candideEmail}`)
            .then(res =>{
                console.log(res.data)
            })

            // now save the new trainer in th db 
            const trainerInfo = {
                joinDate : new Date(),
                paymentStatus: 'pending',
                salary: '20000',
                details: allInfo,
                trainerId: _id,
              
                salaryCount: 0,

            }
            const res = await axiosSecure.post(`/confirm/trainer`, trainerInfo)
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Requested Accepted",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        

    }



    // handel reject button 

    const handelReject = async (id) =>{
        try {
          
            // Edit reject button status
            const response = await axiosSecure.patch(`/trainers/status/${id}`);
            
            console.log(response.data);
        
            if (response.data.modifiedCount > 0) {
              toast.success('Application Rejected');
            }
            refetch()
        
            console.log(id);
        
            // Send email using async/await
            const result = await emailjs.sendForm("service_mae6y8e", "template_fg1ljqu", form.current, "Q6AHY20suZ7Ts2NPU");
        
            console.log(result.text);
          } catch (error) {
            console.error(error);
          }
    }

    
    return (
        <div>
             <div className="px-6">
            
                        <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border text-purple-700 shadow-md">
                        <div className="relative md:w-2/5 overflow-hidden text-purple-700 bg-white rounded-r-none  md:shrink-0  rounded-xl ">
                            <img
                            src={image}
                            alt="image"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                           <div>
                           <h6 className="block mb-4  uppercase">
                            {name}
                            </h6>
                            <p>
                                {role}
                            </p>
                           </div>
                            <div>
                            <h4 className="block mb-2 ">
                            email <span>{trainerEmail}</span>
                            </h4>
                            
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            Age <span>{age}</span>
                            </h4>
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            <span>{yearOfExperience} </span> Of Experience 
                            </h4>
                            </div>

                            <div>
                                <h1>Skills</h1>
                                {
                                    skills?.map((s, i) => <li key={i}>{s}</li>)
                                }
                            </div>
                            
                            <div className="mt-2 flex flex-col md:flex-row gap-5">
                                <div>
                                <p>Available Time in a Day</p>
                                    <div>
                                        {
                                            days?.map((d, i) => <li key={i}>{d}</li> )
                                        }
                                    </div>
                                </div>
                                <div>
                                <p>Available Time in a Week</p>
                                    <div>
                                        {
                                            time?.map((t, i) => <li key={i}>{t}</li> )
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10">
                                {
                                    icons?.map ((icon, i) =>
                                     <button
                                     className="btn btn-sm bg-white mr-2 my-2"
                                     key={i}>
                                        <img src={icon} alt="" />

                                     </button>)
                                }
                            </div>
                         
                            <div className="mt-8">
                                <div >
                                    {/* <button onClick={makeSlot}>check</button> */}

                                    {
                                        status == 'pending' && <>
                                         <button 
                                   onClick={() =>handelAccept(_id)}
                                    className="btn bg-green-500 hover:bg-green-700 btn-sm mb-2 px-3 text-white mr-10">Accept</button>
                                        </> 
                                    }
                                   


                                    <div>
                                          {/* send email from  */}
                                   <div className="hidden">
                                   <form ref={form} onSubmit={handelReject}>
                                    <label>Name</label>
                                    <input type="text" defaultValue='FitnessHub' name="from_name" />
                                    <label>Email</label>
                                    <label>Member Name</label>
                                    <input type="text" defaultValue={name} name="member_name" />
                                    <label>Email</label>
                                    <input defaultValue = {trainerEmail} type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" />
                                    </form>
                                     </div>
                                    </div>


                                   {
                                    status == 'pending' ? <>
                                     <button 
                                    onClick ={() =>handelReject(_id)}
                                    className="btn bg-red-500 btn-sm px-4 hover:bg-red-600 text-white mr-10">Reject</button>

                                    
                                    </>
                                    :
                                   <>
                                   <p className="text-sm font-bold text-red-600">Application Rejected</p>
                                   </>
                                   }

                                </div>
                            </div>
                        </div>
                        </div>


                     
             
            </div>
        </div>
    );
};

export default DetailsModal;