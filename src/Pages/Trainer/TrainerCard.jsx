/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TrainerCard = ({trainer}) => {
    
    const {details, _id } = trainer
   
    // console.log(trainer)
    return (
        <div className="mt-20">
             <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border text-purple-700 shadow-md">
                        <div className="relative md:w-2/5 overflow-hidden text-purple-700 bg-white rounded-r-none  md:shrink-0  rounded-xl ">
                            <img
                            src={details?.image}
                            alt="image"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                           <div>
                           <h6 className="block mb-4  uppercase">
                            {}
                            </h6>
                            <p className="text-2xl font-bold">
                                {details?.name}
                            </p>
                           </div>
                          

                           
                            <div>
                            <h4 className="block mb-2 ">
                            <span> {details?.yearOfExperience} </span> Of Experience 
                            </h4>
                            </div>

                        
                            <div className="mt-2 flex flex-col  gap-5">
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
                                
                                <div>
                            <Link to={`/dashboard/detailsTrainer/${_id}`}>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-purple-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-purple-500/10 active:bg-purple-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                               Know More
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                                </svg>
                            </button>
                            </Link>
                                </div>
                        
                        </div>
                        </div>

        </div>
    );
};

export default TrainerCard;