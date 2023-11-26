import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Title from "../../Components/Title/Title";


const TrainerDetails = () => {
    const {details} = useLoaderData()
    console.log(details)
    return (
        <div className="px-8">
           
           <div className="mb-10">
            <SectionTitle title={" World Class"} title1={'Trainer'} des={'Additionally, a positive attitude, empathy, and a passion for health and fitness are often considered valuable attributes in the fitness industry.'}></SectionTitle>
           </div>

           <div>
           <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative md:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none  md:shrink-0  rounded-xl ">
                            <img
                            src={details?.image}
                            alt="image"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                           <div>
                           <h6 className="block mb-4  uppercase">
                            {details?.name}
                            </h6>
                          
                           </div>
                            <div>
                            <h4 className="block mb-2 ">
                            email <span>{details?.trainerEmail}</span>
                            </h4>
                            
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            Age <span>{details?.age}</span>
                            </h4>
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            <span>{details?.yearOfExperience} </span> Of Experience 
                            </h4>
                            </div>

                            <div>
                                <h1>Skills</h1>
                                {
                                    details?.skills?.map((s, i) => <li key={i}>{s}</li>)
                                }
                            </div>
                            
                            <div className="mt-2 flex flex-col md:flex-row gap-5">
                                <div>
                                <p>Available Time in a Day</p>
                                    <div>
                                        {
                                            details?.days?.map((d, i) => <li key={i}>{d}</li> )
                                        }
                                    </div>
                                </div>
                                <div>
                                <p>Available Time in a Week</p>
                                    <div>
                                        {
                                            details?.time?.map((t, i) => <li key={i}>{t}</li> )
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10">
                                {
                                    details?.icons?.map ((icon, i) =>
                                     <button
                                     className="btn btn-sm bg-white mr-2 my-2"
                                     key={i}>
                                        <img src={icon} alt="" />

                                     </button>)
                                }
                            </div>
                         
                            <div className="mt-8">
                             
                            </div>
                        </div>
                        </div>

           </div>
            
            {/* time slot section  */}
           <div className="my-10">
            <div className=" text-center mt-16 ">
                <Title>Available Time in a Slot</Title>
            </div>
                <div className=" card-body bg-base-100 shadow-lg ">
                    
            <div className="flex gap-3 mt-8 ">
                {
                    details?.days?.map((day, i) =>  <div 
                    key={i} className="bg-gray-300 max-w-max p-10">
                        <p>{day}</p>
                    </div> )
                }
               
            </div>
            <div className="flex gap-2 mt-5">
            {
                    details?.time?.map((time, i) =>  <div 
                    key={i} className="bg-gray-300 max-w-max p-2">
                        <button className="btn">{time}</button>
                    </div> )
                }
               
            </div>
                </div>
           </div>
        </div>
    );
};

export default TrainerDetails;