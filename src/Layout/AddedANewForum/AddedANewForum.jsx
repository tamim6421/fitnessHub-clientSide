import toast from "react-hot-toast";
import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { imageUpload } from "../../Utills";
import { useQuery } from "@tanstack/react-query";


const AddedANewForum = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: postUser = [], isLoading } = useQuery({
        queryKey: ['postUser', user?.email,],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/allusers/${user?.email}`)
            return res.data
        }
    })
   

    const handelPost = async(e) =>{
    
        e.preventDefault()
        const form = e.target 
        const text =  form.text.value 
        const image = form.image.files[0]
        // console.log(text,image)

        // upload image url 
        const imageURl = await imageUpload(image)

        // hose image 
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const postData = {
            post: text,
            host,
            role:postUser[0].role,
            image: imageURl?.data?.display_url,
            date: new Date()
        }

        // console.log(postData)
      
        // post data to the database 
             
        axiosSecure.post('/posts', postData )
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                toast.success('Post Uploaded')
                  e.target.reset();
                
                }
              })

      

        
    }
    return (
        <div>
            <div className="p-4 w-3/6 mx-auto">
                        <h1 className="text-center my-20">
                           <SectionTitle title={'Added a New'} title1={" Post"} des={'Tell Something about your clients and there health'}></SectionTitle>
                        </h1>
                        <form className="bg-gray-100 rounded-md shadow-lg p-3 space-y-7" onSubmit={handelPost}>
                            <p className="text-lg">Post what's on your mind</p>
                        <textarea name="text" className="textarea w-full textarea-bordered" placeholder="Text here"></textarea>
                    <input type="file" name="image" accept="image/*" className="file-input file-input-bordered file-input-sm w-full " />
                    <button className="btn px-7 bg-gray-500 btn-outline text-white">Post</button>
                        </form>
                   
                    </div>
        </div>
    );
};

export default AddedANewForum;