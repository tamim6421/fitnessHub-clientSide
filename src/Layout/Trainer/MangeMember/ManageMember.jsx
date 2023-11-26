import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Title/Title";
import { MdEmail } from "react-icons/md";


const ManageMember = () => {
    const axiosSecure = useAxiosSecure()
    
    // get all user 
    const {data:allUser = [], isLoading: userLoading, refetch} = useQuery({
        queryKey: ['allUser'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/alluser')
            return res.data
        }
    })
    // console.log(allUser)
    const getMember = allUser?.filter(allUser => allUser.role == 'member')
    console.log(getMember)

    return (
        <div className="px-5 mt-5">
            
            <div className="text-center mt-20 mb-10">
                <Title>Manage Members</Title>
            </div>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Number
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Send Email</th>
      </tr>
    </thead>
    <tbody>
    
    {
        getMember?.map((member, i)  => <tr key={member._id}>
            <th>
              {i+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={member?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{member?.name}</div>
                  <div className="text-sm opacity-50">Dhaka Bangladesh </div>
                </div>
              </div>
            </td>
            <td>
             <span>
                {member?.email}
             </span>
              
            </td>
            <td>
            <span className="badge badge-ghost badge-sm">{member?.role}</span>
            </td>
            <th>
              <button className="btn  btn-xs"> <MdEmail /> Email</button>
            </th>
          </tr>  )
    }
   
     
      
    </tbody>
   
   
    
  </table>
</div>

            </div>
        </div>
    );
};

export default ManageMember;