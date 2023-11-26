import { useLoaderData } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import Navbar from "../../../Shared/Navbar/Navbar";
import { FaCheck } from "react-icons/fa";

const TrainerBook = () => {
    const slotData = useLoaderData()
    console.log(slotData)
    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-20">

                <div className="text-center pt-20 mb-10">
                    <Title > Booked Your Package </Title>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-purple-700 to-sky-300 bg-clip-border p-8 text-white shadow-md shadow-purple-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-xl text-white uppercase">
      silver 
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-2xl md:text-4xl">$</span>4000
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Personal Training
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Group Fitness Classes
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
         
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Nutritional Counseling
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Recovery Services
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Recovery Services
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button className=" bg-white btn w-full text-purple-700">
     Join Now 
    </button>
  </div>



                    </div>
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-orange-400 to-purple-600 bg-clip-border p-8 text-white shadow-md shadow-purple-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-xl text-white uppercase">
      Gold
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-2xl md:text-4xl">$</span>7000
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Personal Training
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Group Fitness Classes
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
         
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Nutritional Counseling
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Recovery Services
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Group Fitness Classes
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button className=" bg-white btn w-full text-purple-700">
     Join Now 
    </button>
  </div>



                    </div>
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-purple-600 to-purple-200 bg-clip-border p-8 text-white shadow-md shadow-purple-500/40">
  <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
    <p className="block font-sans text-xl text-white uppercase">
      silver 
    </p>
    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span className="mt-2 text-2xl md:text-4xl">$</span>9999
      <span className="self-end text-4xl">/mo</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Exclusive Memberships
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Technology Integration
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
         
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Nutritional Counseling
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
          
        <FaCheck />

        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Recovery Services
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20">
        <FaCheck />
        
        </span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
        Sports Facilities
        </p>
      </li>
    </ul>
  </div>
  <div className="p-0 mt-12">
    <button className=" bg-white btn w-full text-purple-700">
     Join Now 
    </button>
  </div>
                    </div>

                </div>

            </div>
           
        </div>
    );
};

export default TrainerBook;