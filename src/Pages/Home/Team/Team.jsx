import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Team = () => {


    const axiosPublic = useAxiosPublic()

    const {data:trainers, isLoading} = useQuery({
      queryKey: ['trainers'],
      queryFn: async() =>{
          const res = await axiosPublic.get('/accepttrainer')
          return res.data
      }
    })

    console.log(trainers)

    return (
        <div>
             <div className="p-5">
      <div className="text-center p-5 my-20">
        <h1 className="text-4xl text-purple-500 drop-shadow-lg font-bold" data-aos="fade-up">
          High Qualified <span className="text-orange-500">Team</span>
        </h1>
        <p className="text-xl" data-aos="fade-down">
        Register and browse professionals, explore projects, or even book a consultation.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 ">

        {
            trainers?.slice(0,3).map( trainer => <div
                    key={trainer._id}
                className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border" data-aos="zoom-in-up">
                  <div className="relative box mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className=" w-full h-full object-cover " src={trainer?.details?.image} />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900" data-aos="fade-up">
                      {trainer?.details?.name}
                    </h4>
                  
                    <p className="block text-purple-500" data-aos="fade-down">
                    Trainer
                    </p>
                    <p>
                    {trainer?.details?.yearOfExperience} of experience
                    </p>
                    <p>Skills</p>
                    <p>
                        {
                            trainer?.details?.skills?.slice(0,2).map( (skill, j) => <p key={j}>{skill} </p> )
                        }
                    </p>
                  </div>
                  <div className="flex justify-center p-6 pt-2 gap-7">
                   
                    
                   <a href="">   <FaFacebookSquare className="text-3xl text-blue-500"></FaFacebookSquare></a>
                    <a href=""> <FaTwitterSquare className="text-3xl text-sky-500" ></FaTwitterSquare></a>
                    <a href=""> <FaInstagram className="text-3xl text-orange-500" ></FaInstagram> </a>
                    
                 
                  </div>
              
                    <Link to='/trainer'>
                    <button className="btn text-white w-full bg-purple-500 hover:bg-purple-600" data-aos="flip-down">View Profile</button>
                    </Link>
              
                </div> )
        }

      </div>
    </div>
        </div>
    );
};

export default Team;