import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllSubscribers = () => {
    const axiosSecure = useAxiosSecure()
    const [subscribers, setAllSubscribers] = useState([])

    useEffect( () =>{
        axiosSecure.get('/allsubscriber')
        .then(res =>{
            // console.log(res.data)
            setAllSubscribers(res.data)
        })
    } ,[axiosSecure])

    
    return (
        <div className="mt-20 px-20">
          <div className="my-5 text-center">
          <Title>All Subscribers</Title>
          <p>Our Total Subscribers</p>
          </div>

          <div>
            {
                subscribers.length > 0 ? 
                <>
                <div>
            <div className="overflow-x-auto px-6 mt-10">
  <table className="table shadow-xl">
    {/* head */}
    <thead className="bg-purple-500 text-white">
      <tr>
        <th>
          <label>
            number
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Subscription Date</th>
        
      </tr>
    </thead>
    <tbody>
  
        {
            subscribers?.map( (subs, i) =>  <tr key={i}>
            <th>
              <label>
                {i}
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    {
                        subs.photo ? <>  <img src={subs.photo} alt="Avatar Tailwind CSS Component" /></>
                         : 
                        <>
                        <img src="https://i.ibb.co/VD0D64t/istockphoto-1337144146-612x612.jpg" alt="Avatar Tailwind CSS Component" />
                        </>
                    }
                   
                  </div>
                </div>
                <div>
                  <div className="font-bold">{subs.name}</div>
                  <div className="text-sm opacity-50">Bangladesh</div>
                </div>
              </div>
            </td>
            <td>
             {subs.email}
            </td>
       
            <th>
              {subs.date.slice(0, 10)}
            </th>
          </tr>  )
        }
     
    
    </tbody>
  
    
  </table>
</div> 
            </div>
                </> :
                <>
                 <div className='text-center'>
            <div className='text-2xl font-bold'> no data</div>
            <div className='font-light text-neutral-500 mt-2'>no subscribers</div>
            </div>
                </>
            }
            
         
          </div>
        </div>
    );
};

export default AllSubscribers;