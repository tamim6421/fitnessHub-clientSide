import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const ManageSlots = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const form = useRef();

    const {data: yourSlot, isLoading, refetch} = useQuery({
        queryKey: ['yourSlot', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/yourslot/${user?.email}`)
            return res.data
        }
    })
    console.log(yourSlot)
    if(isLoading){
        return <p>Loading .......</p>
    }

    const bookedSlot = yourSlot?.filter(book => book?.price > 10 )
    console.log(bookedSlot)

    // send email 
    
    const sendEmail = async (id) => {
        try {
          // Edit reject button status
          const response = await axiosSecure.patch(`/slots/status/${id}`);
          
          console.log(response.data);
      
          if (response.data.modifiedCount > 0) {
            toast.success('Slot Booked Rejected');
          }
          refetch()
      
          console.log(id);
      
          // Send email using async/await
          const result = await emailjs.sendForm("service_mae6y8e", "template_pm6oebj", form.current, "Q6AHY20suZ7Ts2NPU");
      
          console.log(result.text);
        } catch (error) {
          console.error(error);
        }
      };



    return (
        <div className="px-7">
            
            <div className="text-center mt-20 mb-10">
                <Title>Manage Your Slots</Title>
            </div>

            <div className="my-10 w-2/4 text-center mb-20 mx-auto">
                <p className='text-xl font-bold text-center mb-5'>My Slots</p>

                {/* <div>
                    {
                        yourSlot?.map( (mySlot, i) => <div key={i}>
                        <p className="flex flex-row mb-4   gap-2 space-y-3 max-w-max mx-auto ">
                       <p>
                       <button className="btn px-9 mb-2 bg-green-600 hover:bg-green-700 text-white">{mySlot.day}</button>
                       </p>
                        
                        <p>
                        <button className="btn btn-sm bg-green-200 ">{mySlot.time}</button>
                        </p>
                            
                        </p>
                        
                    </div>  )
                    }
                </div> */}

               <div >
               <div className="overflow-x-auto">
                        <table className="table bg-slate-50 p-2  shadow-lg">
                         
                          <thead className="bg-purple-500 text-white text-sm rounded-md">
                            <tr>
                              <th>
                                Number 
                              </th>
                              <th>Day</th>
                              <th>Time</th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            {
                                yourSlot?.map( (book, i ) => <tr key={i}>
                                <th>
                                  {i+1}
                                </th>
                                <td>
                                <button className="btn px-9 mb-2 btn-sm bg-green-600 hover:bg-green-700 text-white">{book?.day}</button>
                                </td>
                                <td>
                                <button className="btn btn-sm bg-green-200 ">{book?.time}</button>
                                </td>
                                
                        
                              </tr> )
                            }
                         
                          </tbody>
                      
                        </table>
                      </div>
               </div>
            </div>



            <div className="w-3/4 text-center mb-20 mx-auto">
                <h1 className='mb-5 pt-10'>
                    <Title>My Booked Slot </Title>
                     </h1>
                

                <div>
                    
                        <div className="overflow-x-auto">
                        <table className="table">
                         
                          <thead className="bg-purple-500 text-white text-sm rounded-md">
                            <tr>
                              <th>
                                Number 
                              </th>
                              <th>Booked By</th>
                              <th>Day</th>
                              <th>Time</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            {
                                bookedSlot?.map( (book, i ) => <tr key={i}>
                                <th>
                                  {i+1}
                                </th>
                                <td>
                                  <div className="flex items-center gap-3">
                                    <div className="avatar">
                                      <div className="mask mask-squircle w-12 h-12">
                                        <img src={book?.user?.photoURL}  alt="Avatar Tailwind CSS Component" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold text-lg text- text-purple-600">{book?.user?.displayName}</div>
                                     
                                    </div>
                                  </div>
                                </td>
                                <td>
                                <button className="btn px-9 mb-2 btn-sm bg-green-600 hover:bg-green-700 text-white">{book?.day}</button>
                               
                                </td>
                               
                                <td>
                                <button className="btn btn-sm bg-green-200 ">{book?.time}</button>
                                </td>
                                <th>

                                    {/* send email from  */}
                                   <div className="hidden">
                                   <form ref={form} onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <input type="text" defaultValue={book?.trainerName} name="from_name" />
                                    <label>Email</label>
                                    <label>Member Name</label>
                                    <input type="text" defaultValue={book?.user?.displayName} name="member_name" />
                                    <label>Email</label>
                                    <input defaultValue = {book?.user?.email} type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" />
                                    </form>
                                     </div>
                                        
                                  {
                                    book?.status == null ||  book?.status == 'pending' ?  <>
                                    
                                    <button
                                    onClick ={() =>sendEmail(book?._id)}
                                className="bg-red-500 rounded-md px-4 py-2 text-white"> Reject  </button></>:

                                    <><h1 className="text-red-600">Rejected</h1></>
                                  }
                                   
                                </th>
                              </tr> )
                            }
                         
                          </tbody>
                      
                        </table>
                      </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageSlots;