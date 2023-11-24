import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { imageUpload } from "../../Utills";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Forum = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false)


    const {data: postUser = [], isLoading } = useQuery({
        queryKey: ['postUser', user?.email,],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/allusers/${user?.email}`)
            return res.data
        }
    })

    console.log()
    
    const handelPost = async(e) =>{
    
        e.preventDefault()
        const form = e.target 
        const text =  form.text.value 
        const image = form.image.files[0]
        console.log(text,image)

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

        console.log(postData)
      
        // post data to the database 
             
            axiosPublic.post('/posts', postData )
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                  Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "User Created Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  e.target.reset();
                 
                }
              })

      

        
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className="mt-20">
                <SectionTitle title={'Added a new'} title1={'Post'}></SectionTitle>
                <button
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                className="text-white btn btn-outline bg-gray-600 px-6 block mx-auto">Added a New Post</button>
            </div>

            <div>
             
            </div>

                {/* modal for new post */}
               <div>
               <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button  className="btn btn-sm  bg-gray-300 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    
                    <div className="p-4">
                        <h1>Create a new Post</h1>
                        <form onSubmit={handelPost}>
                        <textarea name="text" className="textarea w-full textarea-bordered" placeholder="Text here"></textarea>
                    <input type="file" name="image" accept="image/*" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
                    <button className="btn bg-gray-500 btn-outline text-white">Post</button>
                        </form>
                   
                    </div>
                </div>
                </dialog>
               </div>
        </div>
    );
};

export default Forum;