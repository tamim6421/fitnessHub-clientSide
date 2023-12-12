import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import Title from "../../../Components/Title/Title";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ClassCard from "./ClassCard";
import { Link } from "react-router-dom";


const ActivityLoge = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [mySlot, setMySlot] = useState([])
    const [tabIndex, setTabIndex] = useState(0);

    const {data: allSlot} = useQuery({
        queryKey: ['allSlot'],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/getslot/`)
            return res.data
        }
    })
    // console.log(allSlot)



const saturday = mySlot?.filter( days => days.day == 'Saturday')
const sunday = mySlot?.filter( days => days.day == 'Sunday')
const monday = mySlot?.filter( days => days.day == 'Monday')
const tuesday = mySlot?.filter( days => days.day == 'Tuesday')
const wednesday = mySlot?.filter( days => days.day == 'Wednesday')
const thursday = mySlot?.filter( days => days.day == 'Thursday')
const friday = mySlot?.filter( days => days.day == 'Friday')

//   console.log('saturday', saturday, "monday", monday, 'sunday', sunday, tuesday,wednesday,thursday ,friday )
// console.log(monday)
    return (
        <div className=" ml-20 md:px-20 mb-20 ">
            <h1 className="text-center pt-10" >
                <Title>
                    My Todays Activity
                </Title>
            </h1>

            <div>
              <p className="text-gray-500 text-center mt-10 text-2xl">Hello  <span className="text-green-500 font-bold">{user?.displayName}</span></p>
              <p className="text-center mb-5">See your today activity</p>
            </div>
            <div className=" w-5/6 mx-auto mb-10 mt-2">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                    <TabList className='bg-purple-400 flex gap-1 flex-wrap justify-center rounded-2xl px-2 py-4 text-white'>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Saturday</Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Sunday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Monday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Tuesday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Wednesday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Thursday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-gray-500 text-white hover:bg-orange-200  ">Friday </Tab>
                    </TabList>


                    {/* saturday  */}
                    <TabPanel>
                        {
                             saturday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                            
                            {
                               
                                saturday?.map(slot => <ClassCard
                                key={slot._id}
                                slot={slot}
                                ></ClassCard>)
                            }
                            </div>
                             </> : <>
                             <div 
                 className="card rounded-lg w-full bg-base-100 shadow-xl " data-aos="fade-up">
               
                <div className="card-body box text-lg">

                  <h2 className="text-xl font-bold">
                    No Class Today
                    </h2>

                    <h1>If You want to booked class today please  go to .. <Link className="text-orange-600 font-bold underline" to='/classes'>Our Classes</Link>  </h1>
                </div>
              </div>
                             </>
                        }
                       
                      
                    </TabPanel>

                   


                    
                    </Tabs>
            </div>

          
        </div>
    );
};

export default ActivityLoge;