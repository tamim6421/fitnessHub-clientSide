/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppliedCard = ({trainer}) => {
    const {name, image, trainerEmail, age, icons, days, skills, time,yearOfExperience, _id ,role } = trainer
    console.log(trainer)





    return (
        <div>
            <div className="relative flex flex-col mt-6 text-purple-700 bg-purple-100 shadow-md  rounded-xl bg-clip-border">
  <div className="p-6">
        <div>
        <div className="avatar">
        <div className="w-24 rounded-full ring ring-purple-400 ring-offset-base-100 ring-offset-2">
            <img src={image}/>
        </div>
</div>
        </div>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-purple-900">
        Name : <span>{name}</span>
    </h5>
    <p className="text-lg font-semibold">
    Email: <span> {trainerEmail}</span>
    </p>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it is about motivating the doers. Because I am here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div className="p-6 pt-0">
    <a
      className="!font-medium !text-blue-purple-900 !transition-colors"
      href="#"
    >
   <Link to={`/dashboard/trainerDetails/${_id}`}>
   <button
      
        className="flex items-center bg-purple-200 gap-2 px-4 py-2 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none  disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      >
        See Details
        <FaEye className="text-3xl" />
      </button>
   </Link>
  
    </a>
  </div>
</div>


          

          
        </div>
    );
};

export default AppliedCard;