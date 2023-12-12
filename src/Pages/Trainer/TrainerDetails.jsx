import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Title from "../../Components/Title/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const TrainerDetails = () => {
  const { details } = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const [groupedData, setGroupData] = useState([]);

  const { data: slotData } = useQuery({
    queryKey: ["slotData"],
    queryFn: async () => {
      const res = await axiosSecure.get("getslot");
      return res.data;
    },
  });

  useEffect(() => {
    const filtered = slotData?.filter((data) => data?.trainerId == details?._id);

    class GroupedSlotData {
      constructor(day) {
        this.Day = day;
        this.SlotData = [];
      }
    }

  
  }, [slotData, details]);

  
  // console.log(groupedData)
  return (
    <div>
      <Navbar></Navbar>
      <div className="px:8 md:px-20 mt-20 overflow-hidden" >
      
      <div className="mb-10"data-aos="fade-up">
        <SectionTitle
          title={" World Class"}
          title1={"Trainer"}
          des={
            "Additionally, a positive attitude, empathy, and a passion for health and fitness are often considered valuable attributes in the fitness industry."
          }
        ></SectionTitle>
      </div>

      <div>
        <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border shadow-md" data-aos="fade-up-left">
          <div className="relative md:w-2/5 overflow-hidden  bg-white rounded-r-none  md:shrink-0  rounded-xl ">
            <img
              src={details?.image}
              alt="image"
              className="object-cover w-full box h-full"
            />
          </div>
          <div className="p-6">
            <div>
              <h6 className="block mb-4 text-2xl text gray-500 font-semibold uppercase">{details?.name}</h6>
            </div>
            <div>
              <h4 className=" mb-2 flex gap-2 items-center ">
                <MdEmail className="text-2xl text-gray-500"></MdEmail><span className="text-xl text-gray-500">{details?.trainerEmail}</span>
              </h4>
            </div>

            <div>
              <h4 className="block mb-2 text-xl text-gray-500 ">
                Age <span>{details?.age}</span>
              </h4>
            </div>

            <div>
              <h4 className="block mb-2 text-xl text-gray-500 ">
                <span>{details?.yearOfExperience} </span> Of Experience
              </h4>
            </div>

            <div>
              <h1 className="text-xl text-gray-500 font-bold">Skills</h1>
              {details?.skills?.map((s, i) => (
                <li className="text-xl text-gray-500" key={i}>{s}</li>
              ))}
            </div>

            <div className="mt-2 flex flex-col md:flex-row gap-5">
              <div>
                <p className="text-xl text-gray-500 font-bold">Available Time in a Day</p>
                <div>
                  {details?.days?.map((d, i) => (
                    <li className="text-xl text-gray-500" key={i}>{d}</li>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-500 font-bold">Available Time in a Week</p>
                <div>
                  {details?.time?.map((t, i) => (
                    <li className="text-xl text-gray-500" key={i}>{t}</li>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10">
              {details?.icons?.map((icon, i) => (
                <button className="btn btn-sm bg-white mr-2 my-2" key={i}>
                  <img src={icon} alt="" />
                </button>
              ))}
            </div>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>

      {/* time slot section  */}
      <div className="my-10">
        <div className=" text-center mt-16 ">
          <Title>Available Time in a Slot</Title>
          <h1 className="text-xl mt-3">Booked Your Slot</h1>
        </div>


        <div className=" card-body  mx-auto w-full ">
          <div className="flex flex-col md:flex-row overflow-x-auto gap-2 mt-8 ">
            {groupedData?.map((group, i) => (
              <div key={i} className="bg-purple-100 shadow-xl  max-w-max p-5 rounded-lg">
                <p className="btn bg-purple-500 text-white hover:bg-purple-700 px-9">
                  {group.Day}
                </p>

                <div className="flex flex-col gap-2 mt-5">
                  {group?.SlotData?.map((slot, j) => (

                    <div key={j} >
                    {slot.user == null ?
                    <div className="max-w-max p-2">
                      <Link to={`/trainerBook/${slot._id}`}>
                      <button className="btn btn-outline">{slot.time}</button>
                      </Link>
                    </div> : <div> <button  className="btn btn-warning text-white  bg-orange-400">{slot.time} Booked</button> 
                    <p></p></div>
                    } 
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default TrainerDetails;
