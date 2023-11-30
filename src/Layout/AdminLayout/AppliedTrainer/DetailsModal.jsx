import { useLoaderData, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";


import emailjs from '@emailjs/browser';
import { useRef } from "react";
import useAuth from "../../../Hooks/useAuth";
import Title from "../../../Components/Title/Title";
import Loader from "../../../Components/Loader/Loader";
import { MdEmail } from "react-icons/md";



const DetailsModal = () => {
    const {user } = useAuth()
    const  allInfo = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const form = useRef();
    const navigate = useNavigate()
  

   
    const {name, image, trainerEmail, age, status, icons, days, skills, time,yearOfExperience, _id  } = allInfo
//   console.log(allInfo)

    const {data:allUser = [], isLoading, isError, refetch} = useQuery({
        queryKey: ['allUser'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/alluser')
            return res.data
        }
    })


    // hendale  loading 
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }


    // console.log(allUser)
    const getEmail = allUser?.filter(user => user.email == trainerEmail )
    const candideEmail = getEmail[0]?._id
    // console.log(getEmail)

    
    let slotArray = []


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
                  navigate('/dashboard/allTrainers')               
            }
        

    }



    // handel reject button 

    const handelReject = async (id) =>{
        
        try {
          
            // Edit reject button status
            const response = await axiosSecure.patch(`/trainers/status/${id}`);
            
            // console.log(response.data);
        
            if (response.data.modifiedCount > 0) {
              toast.success('Application Rejected');
            }
            refetch()
        
            console.log(id);
        
            // Send email using async/await
            const result = await emailjs.sendForm("service_943si9x", "template_f6rjijl", form.current, "CI0W8Fvmb5rU_EeB5");
        
            console.log(result.text);
          } catch (error) {
            console.error(error);
          }
    }

    
    return (
        <div>
             <div className="md:px-20 my-20 overflow-hidden">
                        <div className="text-center my-20">
                            <Title>Applied Trainer Details</Title>
                        </div>
                        <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border text-gray-500 shadow-md">
                        <div className="relative md:w-2/5 overflow-hidden text-purple-700 bg-white rounded-r-none  md:shrink-0  rounded-xl " data-aos="fade-left">
                            <img
                            src={image}
                            alt="image"
                            className="object-cover box w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                           <div>
                           <h6 className="block mb-4 text-gray-500 font-bold text-2xl uppercase">
                            {name}
                            </h6>
                          
                           </div>
                            <div>
                            <h4 className=" flex items-center gap-2 mb-2 ">
                                <span>
                                    <MdEmail className="text-2xl text-gray-400"></MdEmail>
                                </span>
                            <span className="text-gray-500">{trainerEmail}</span>
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
                                <h1 className="text-xl font-bold ">Skills</h1>
                                <div >
                                {
                                    skills?.map((s, i) => <li key={i}>{s}</li>)
                                }
                                </div>
                            </div>
                            
                            <div className="mt-2 flex flex-col md:flex-row gap-5">
                                <div>
                                <p className="text-xl font-bold">Available Time in a Day</p>
                                    <div className=" max-w-max p-2 rounded-md "data-aos="fade-right" >
                                        {
                                            days?.map((d, i) => <li key={i}>{d}</li> )
                                        }
                                    </div>
                                </div>
                                <div>
                                <p className="text-xl font-bold">Available Time in a Week</p>
                                    <div className=" max-w-max p-2 rounded-md " data-aos="fade-left">
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
                                    className="btn bg-green-500 hover:bg-green-700 btn-sm mb-2 px-3 text-white mr-10" data-aos="fade-left">Accept</button>
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
                                    <br />
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
                                    className="btn bg-red-500 btn-sm px-4 hover:bg-red-600 text-white mr-10" data-aos="fade-right">Reject</button>

                                    
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