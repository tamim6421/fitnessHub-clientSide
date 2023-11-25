
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Title/Title";


const AllTrainers = () => {
    const axiosSecure = useAxiosSecure()

  const {data:trainers, isLoading, refetch} = useQuery({
    queryKey: ['trainers'],
    queryFn: async() =>{
        const res = await axiosSecure.get('/accepttrainer')
        return res.data
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

const joiningDate = trainers?.map( day => day.joinDate )
console.log(joiningDate)




  function remainingMonths(date1,salaryCount) {
    let joinDate = new Date(date1);
    let todayDate = new Date()
    let months = (todayDate.getFullYear() - joinDate.getFullYear()) * 12;
    months -= joinDate.getMonth();
    months += todayDate.getMonth() ;
    console.log(months)
    return months > salaryCount ? true : false; 
  }
  
  console.log(  remainingMonths(trainers[3].joinDate,trainers[3].salaryCount) )


console.log(trainers)

    return (
        <div className="mt-20 ">
            <div className="text-center mb-16">
                <Title>All Trainers </Title>
            </div>
            <div>
            <div className="overflow-x-auto px-6">
  <table className="table">
    {/* head */}
    <thead className="text-uppercase font-semibold bg-gray-400 text-lg text-white">
      <tr>
        <th>
          Number
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Jon Date</th>
        <th>Salary</th>
        <th>Payment Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
   
        {
            trainers?.map( (trainer, i) =>    <tr key={i}>
            <th>
              {i+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={trainer?.details?.image}alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                  <p>{trainer?.details?.name}</p>
                  </div>
                 
                </div>
              </div>
            </td>
            <td>
             {trainer?.details?.trainerEmail}
            
            </td>
            <td>{trainer?.joinDate?.slice(0, 10)}</td>
            <td>{trainer?.salary}</td>
            <td className=""> <p>{trainer?.paymentStatus}</p> </td>
            <th>
                {
                    remainingMonths(trainer.joinDate,trainer.salaryCount) == true ? <button className="btn btn-ghost btn-xs">Pay</button> : ''
                }
              
            </th>
          </tr> )
        }
     
     
    </tbody>
 
    
  </table>
</div>

            </div>
        </div>
    );
};

export default AllTrainers;