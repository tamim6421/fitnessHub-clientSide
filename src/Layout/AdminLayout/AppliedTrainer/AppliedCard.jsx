/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const AppliedCard = ({trainer}) => {
    // eslint-disable-next-line no-unused-vars
    const {name, image, trainerEmail,  _id  } = trainer
    console.log(trainer)





    return (
        <div className="px-10 overflow-hidden">
            <div className="  relative flex flex-col mt-6 text-gray-500  shadow-md  rounded-xl bg-clip-border" data-aos="fade-up-left">
  <div className="p-6">
        <div>
        <div className="avatar">
        <div className="w-24 rounded-full ring ring-gray-400  ring-offset-2">
            <img src={image}/>
        </div>
</div>
        </div>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-purple-900">
        Name : <span>{name}</span>
    </h5>
    <p className="text-lg flex items-center gap-1 font-semibold">
      <span>
      <MdEmail className="text-2xl text-purple-800" />
      </span>
     <span> {trainerEmail}</span>
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
      
        className="flex items-center bg-purple-600 text-white gap-2 px-4 py-2 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none  disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
      >
        See Details
        <FaEye className="text-3xl  text-white" />
      </button>
   </Link>
  
    </a>
  </div>
</div>


          

          
        </div>
    );
};

export default AppliedCard;