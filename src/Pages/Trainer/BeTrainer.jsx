import { useForm } from "react-hook-form";
import Title from "../../Components/Title/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Multiselect from 'multiselect-react-dropdown';
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const BeTrainer = () => {
    const {user} = useAuth()
    // console.log(user)
    const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic()

    const socialIcons = [ 'https://i.ibb.co/j80F2XK/twitter.png', 'https://i.ibb.co/vzRtCy2/facebook.png',
    'https://i.ibb.co/2PD9cxY/insta.png']
  const [days, setDays] = useState(['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'])
  const [storeDays, setStoreDays] = useState([])

  const [time, setTime] = useState(["6 am - 7 am","7 am - 8 am",  "8 am - 9 am" , "9 am - 10 am", "5 pm - 6 pm", "7 pm - 8 pm", "8 pm - 9 pm", "9 pm - 10 pm", "11 pm - 12 pm" ])
    const [storeTime, setStoreTime] = useState([])

    // console.log(storeDays)

  const onSubmit = async (data) => {
    console.log(data, storeDays, storeTime);
    // image upload to image bb and get a url for this image 
    const uploadImage = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, uploadImage, {
        headers:{
            'content-type' : 'multipart/form-data'
        }
    })
    console.log(res.data)
    if(res.data.success){
        // now send the menu item data send the database 
        const trainerDetails = {
            name: data.name,
            age: data.age,
            yearOfExperience: data.experience,
            number: data.number,
            trainerEmail: data.email,
            image: res.data.data.display_url,
            skills: data.skills, 
            days: storeDays,
            time: storeTime,
            icons: socialIcons,
        }
        // send data to the database 
        const menuResponse = await axiosPublic.post('/betrainer', trainerDetails)
        console.log(menuResponse.data)
        if(menuResponse.data.insertedId){
            reset()
            // show success popup
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${data.name} applied to be a trainer`,
                showConfirmButton: false,
                timer: 1500
              });

        }
    }
  };


    return (
        <div className="my-32 text-center">
            <Title>Be a Trainer</Title>


            {/* be a trainer form  */}
            <div>
            <div className="w-3/4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
      
      {/* name and email field  */}
        <div className="md:flex gap-5">
        <div className="form-control w-full my-7 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            {...register("name", { required: true })}
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full "
            />
          </div>

        <div className="form-control w-full my-7 ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
                {...register("email", { required: true })}
                type="text"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
                />
          </div>

        </div>

        <div className=" md:flex gap-4 ">
           
            <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              {...register("age", { required: true })}
              placeholder="Age"
              className="input input-bordered w-full "
            />
          </div>
            
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Year Of Experience</span>
            </label>
            <select 
            {...register("experience", { required: true })}
            className="select select-bordered w-full">
            <option disabled value="default">select your experience</option>
            <option value="1 years">1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years ">3 years </option>
            <option value="4 years ">4 years </option>
            <option value="5 years">5 years </option>
          </select>
          </div>
             
        </div>

            {/* checkbox */}
            <div className=" md:flex justify-start gap-2 bg-gray-50 border-2 rounded-sm mt-16  items-center ">
                <div>
                <label className="label">
              <span className="label-text text-xl">Skills: </span>
            </label>
                </div>
             <input {...register("skills")} type="checkbox" value="Exercise Prescription" className="checkbox checkbox-md " /> <span>Exercise Prescription </span>
            
            <input {...register("skills")} type="checkbox" value="Understanding Anatomy " className="checkbox checkbox-md" /> <span>Understanding Anatomy  </span>
            
            <input {...register("skills")} type="checkbox" value="Equipment Use" className="checkbox checkbox-md" /> <span>Equipment Use </span>
            
            <input {...register("skills")} type="checkbox" value="Fitness Assessment" className="checkbox checkbox-md" /> <span>Fitness Assessment </span>
            <input {...register("skills")} type="checkbox" value="Punctuality" className="checkbox checkbox-md" /> <span>Punctuality</span>
            </div>


          <div>
          <div className="mt-5">
          <label className="label">
              <span className="label-text">Available Time In a Week </span>
            </label>
                <Multiselect
                isObject={false}
                options={days}
                placeholder='Select Days'
                showCheckbox
                onSelect={(event) => setStoreDays(event)}
                onRemove={(event) => setStoreDays(event)}
                >

                </Multiselect>
            </div>

          <div className="mt-5" >
          <label className="label">
              <span className="label-text">Available Time In a Day </span>
            </label>
                <Multiselect
                isObject={false}
                options={time}
                placeholder='Select Time'
                showCheckbox
                onSelect={(event) => setStoreTime(event)}
                onRemove={(event) => setStoreTime(event)}
                >

                </Multiselect>
            </div>
        
            </div>

          

            {/* file input  */}
            <div className="mt-5">
            <label className="label">
              <span className="label-text">Upload Profile Picture </span>
            </label>
           
            <input {...register("image", { required: true })}  type="file" className="file-input file-input-bordered w-full bg-gray-200 " />
            </div>

                <div className="mt-5">
                    <button 
                   
                    className="btn bg-gray-400 mt-5 hover:bg-gray-500 w-full text-white">
                        Submit
                    </button>
                </div>
        </form>

     


      </div>

            </div>
        </div>
    );
};

export default BeTrainer;