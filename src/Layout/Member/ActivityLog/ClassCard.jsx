/* eslint-disable react/prop-types */

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const ClassCard = ({slot}) => {
    
    return (
        <div>
              <div 
                 className="card rounded-lg bg-base-100 max-w-max shadow-xl " data-aos="fade-up">
               
                <div className="card-body box text-lg">

                  <h2 className="flex  justify-start">
                  <p>
                        <FaRegCalendarAlt className="text-2xl text-gray-500"></FaRegCalendarAlt>
                        </p>
                        <p className="text-xl font-bold">
                        {slot?.day} 
                        </p>
                   
                    </h2>


                    <div className="flex  justify-start">
                        <p ><IoTimeSharp className="text-2xl text-gray-500"></IoTimeSharp></p>
                        <p className="text-lg">{slot?.time} </p>
                    </div>

                    <div className="flex  justify-start items-center">
                        <p><MdEmail className="text-2xl text-gray-500" /></p>
                        <p> {slot?.email} </p>
                    </div>

                    <div className="flex justify-start items-center"> 
                        <p>Trainer :  </p>
                        <p className="text-xl font-semibold"> {slot?.trainerName} </p>
                    </div>
                
                </div>
              </div>

        </div>
    );
};

export default ClassCard;