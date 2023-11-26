import Multiselect from "multiselect-react-dropdown";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Utills";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()

  const [time, setTime] = useState(["6 am - 7 am","7 am - 8 am",  "8 am - 9 am" , "9 am - 10 am", "5 pm - 6 pm", "7 pm - 8 pm", "8 pm - 9 pm", "9 pm - 10 pm", "11 pm - 12 pm" ])
  const [storeTime, setStoreTime] = useState([])

  

  const addClass = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const image = form.image.files[0];
    const className = form.className.value 

    // console.log(text, image, className);

    // upload image url
    const imageURl = await imageUpload(image);

    // hose image
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    const postData = {
        className,
      description: text,
      host,
      classTime: storeTime,
      image: imageURl?.data?.display_url,
      date: new Date(),
    };

    // console.log(postData)

    // post data to the database

    axiosSecure.post("/classes", postData)
    .then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Class Added Successful");
        e.target.reset(); 
        navigate('/classes')    
      }
    });
  };



  return (
    <div>
      {/* added a class only trainer */}
      <div>
        <div className="w-3/6 mx-auto">
          <h1 className="mt-20">
            <Title>Added A New Class</Title>
          </h1>
          <form className="bg-gray-50 shadow-lg rounded-sm p-4" onSubmit={addClass}>
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  name="className"
                  placeholder="Class Name"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            <div>
            <div className="mt-5">
          <label className="label">
              <span className="label-text">Class Time </span>
            </label>
                <Multiselect
                isObject={false}
                options={time}
                placeholder='Select Days'
                showCheckbox
                onSelect={(event) => setStoreTime(event)}
                onRemove={(event) => setStoreTime(event)}
                >

                </Multiselect>

            </div>
            </div>

           <div className="form-control">
           <label className="label">
                  <span className="label-text">Class Descriptions</span>
                </label>
           <textarea
              name="text"
              className="textarea w-full textarea-bordered"
              placeholder="Class Descriptions"
            ></textarea>
           </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered mt-5 file-input-sm w-full "
            />
            <button className="btn mt-5 bg-gray-500 btn-outline text-white">
              Added Class
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
