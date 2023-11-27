import { useQuery } from "@tanstack/react-query";
import Title from "../../../Components/Title/Title";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageSlots = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const {data: yourSlot, isLoading} = useQuery({
        queryKey: ['yourSlot', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/yourslot/${user?.email}`)
            return res.data
        }
    })
    console.log(yourSlot)
    if(isLoading){
        return <p>Loading .......</p>
    }

    const bookedSlot = yourSlot?.filter(book => book?.price > 10 )
    // console.log(bookedSlot[0])




    return (
        <div className="px-7">
            
            <div className="text-center mt-20 mb-10">
                <Title>Manage Your Slots</Title>
            </div>

            <div className="my-10">
                <p className='text-xl font-bold text-center mb-5'>My Slots</p>

                <div>
                    {
                        yourSlot?.map( (mySlot, i) => <div key={i}>
                        <p className="flex flex-row  items-center justify-center gap-2 space-y-3 max-w-max mx-auto ">
                       <p>
                       <button className="btn px-9 mb-2 bg-green-600 hover:bg-green-700 text-white">{mySlot.day}</button>
                       </p>
                        
                        <p>
                        <button className="btn btn-sm bg-green-200 ">{mySlot.time}</button>
                        </p>

                        </p>
                        
                    </div>  )
                    }
                </div>
            </div>



            <div className="w-3/4 text-center mb-20 mx-auto">
                <h1 className='text-xl font-bold mb-5'>My Booked Slot  </h1>
                <div>
                    {
                        bookedSlot?.map( (slot, i) => <div key={i}>
                            <p className="flex flex-col gap-2 max-w-max mx-auto ">
                            <button className="btn px-9  bg-green-700 text-white">{slot.day}</button>
                            <button className="btn btn-sm bg-green-200 ">{slot.time}</button>

                            </p>
                            
                        </div>  )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageSlots;