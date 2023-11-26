import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserRole from "../../../Hooks/useUserRole";
import toast from "react-hot-toast";

const ProfileSetting = () => {
  const { user } = useAuth();
  const { userRole } = useUserRole();
  const axiosSecure = useAxiosSecure()


  const {data:allUser = [], isLoading: userLoading, refetch} = useQuery({
    queryKey: ['allUser'],
    queryFn: async () =>{
        const res = await axiosSecure.get('/alluser')
        return res.data
    }
})

console.log(allUser)

if(userLoading) return <h2> Loading.....</h2>
// console.log(allUser)
const getMember = allUser?.find(allUser => allUser.email == user?.email)

console.log(getMember._id)



  const updateProfile = e =>{
    e.preventDefault()
    const form = e.target 
    const name = form.name.value 
    const photo = form.photo.value 
    const number = form.number.value 
    const address = form.address.value 

    const updateInfo = {
        name,
        photo,
        number,
        address,
    }
    console.log(name, photo, number, address)
    axiosSecure.put(`/users/${getMember?._id}`,updateInfo )
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            toast.success('Profile Update')
            e.target.reset()
        }
    })

  }




  return (
    <div>
      <div className="card min-h-screen bg-purple-100 ">
        <figure className="px-10 flex flex-col  pt-10">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <p className="text-lg font-bold">{user?.displayName}</p>
          
        </figure>
       
        <div className="items-center text-center">
        <form onSubmit={updateProfile}>
        <div className="w-3/6 space-y-7 mx-auto">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            
            <div className="md:flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Number"
                required
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="input input-bordered w-full "
              />
            </div>
            </div>
          </div>

          <button className="btn bg-purple-600 mt-10 text-white btn-outline ">Update Profile </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
