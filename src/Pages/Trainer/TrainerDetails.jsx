import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Title from "../../Components/Title/Title";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

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


// Assume you have some data in slotData array


  const filtered = slotData?.filter((data) => data?.trainerId == details?._id);
  console.log(filtered);

  useEffect(() => {
    class GroupedSlotData {
      constructor(day) {
          this.Day = day;
          this.SlotData = [];
      }
  }

    const updatedGroupedSlots = filtered?.reduce((accumulator, current) => {
      let existingGroup = accumulator.find(group => group?.Day === current?.day);
  
      if (existingGroup) {
        existingGroup.SlotData.push(current);
      } else {
        let newGroup = new GroupedSlotData(current.day);
        newGroup.SlotData.push(current);
        accumulator.push(newGroup);
      }
  
      return accumulator;
    }, []);
    
    setGroupData(updatedGroupedSlots)
  }, [filtered]);
  
  console.log(groupedData)
  return (
    <div className="px-8">
      <div className="mb-10">
        <SectionTitle
          title={" World Class"}
          title1={"Trainer"}
          des={
            "Additionally, a positive attitude, empathy, and a passion for health and fitness are often considered valuable attributes in the fitness industry."
          }
        ></SectionTitle>
      </div>

      <div>
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
              <h6 className="block mb-4  uppercase">{details?.name}</h6>
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
              {details?.skills?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </div>

            <div className="mt-2 flex flex-col md:flex-row gap-5">
              <div>
                <p>Available Time in a Day</p>
                <div>
                  {details?.days?.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </div>
              </div>
              <div>
                <p>Available Time in a Week</p>
                <div>
                  {details?.time?.map((t, i) => (
                    <li key={i}>{t}</li>
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
        </div>


        <div className=" card-body ">
          <div className="flex flex-col md:flex-row gap-2 mt-8 ">
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
                    </div> : <div> <button disabled className="btn btn-warning  bg-orange-500">{slot.time} Booked</button> 
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
  );
};

export default TrainerDetails;
