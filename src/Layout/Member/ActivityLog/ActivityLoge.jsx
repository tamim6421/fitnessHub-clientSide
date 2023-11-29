import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
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

    const {data: allSlot, isLoading, refetch} = useQuery({
        queryKey: ['allSlot'],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/getslot/`)
            return res.data
        }
    })
    // console.log(allSlot)

    useEffect( () =>{
        const filterSlot = allSlot?.filter( my => my?.user?.email == user?.email)
        setMySlot(filterSlot)
    } ,[allSlot, user?.email])
    // console.log(mySlot)

const saturday = mySlot?.filter( days => days.day == 'Saturday')
const sunday = mySlot?.filter( days => days.day == 'Sunday')
const monday = mySlot?.filter( days => days.day == 'Monday')
const tuesday = mySlot?.filter( days => days.day == 'Tuesday')
const wednesday = mySlot?.filter( days => days.day == 'Wednesday')
const thursday = mySlot?.filter( days => days.day == 'Thursday')
const friday = mySlot?.filter( days => days.day == 'Friday')

//   console.log('saturday', saturday, "monday", monday, 'sunday', sunday, tuesday,wednesday,thursday ,friday )
console.log(tuesday)
    return (
        <div className=" ml-30 px-20 ">
            <h1 className="text-center pt-10" >
                <Title>
                    My Todays Activity
                </Title>
            </h1>

            <div className=" w-5/6 mx-auto my-10">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                    <TabList className='bg-purple-400 flex gap-1 flex-wrap justify-center rounded-3xl px-2 py-4 text-white'>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Saturday</Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Sunday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Monday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Tuesday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Wednesday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Thursday </Tab>
                        <Tab className="btn btn-sm md:btn md:bg-orange-500 hover:bg-orange-600 text-white  ">Friday </Tab>
                    </TabList>


                    {/* saturday  */}
                    <TabPanel>
                        {
                             saturday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
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

                    {/* sunday  */}
                    <TabPanel>
                    {
                             sunday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               sunday?.map(slot => <ClassCard
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

                        {/* monday  */}
                    <TabPanel>
                    {
                             monday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               monday?.map(slot => <ClassCard
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

                 
                        {/* tuesday */}
                    <TabPanel>
                    {
                             tuesday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               tuesday?.map(slot => <ClassCard
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

                    {/* wednesday  */}
                    <TabPanel>
                    {
                             wednesday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               wednesday?.map(slot => <ClassCard
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

                    {/* thursday */}
                    <TabPanel>
                    {
                             thursday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               thursday?.map(slot => <ClassCard
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

                    {/* friday */}
                    <TabPanel>
                    {
                             friday?.length !== 0 ? <>
                              <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                            
                            {
                               
                               friday?.map(slot => <ClassCard
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