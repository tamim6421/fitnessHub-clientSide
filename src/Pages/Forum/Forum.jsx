import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Navbar from "../../Shared/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { imageUpload } from "../../Utills";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";
import './Forum.css'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Footer from "../../Shared/Footer/Footer";


const Forum = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)



    const [currentPage, setCurrentPage] = useState(0)
    
    const [itemsParPage, setItemsParPage] = useState(5)
    const navigate = useNavigate()
    console.log(currentPage)

    const {data: allPost, refetch } = useQuery({
        queryKey: ['allPost', currentPage],
        queryFn: async ({ pageParam = currentPage }) =>{
            const res = await axiosSecure.get(`/allpost?page=${currentPage}&size=${itemsParPage}`)
            return res.data
        }
    })

    console.log(allPost?.count)
        const number = allPost?.count
    const numberOfPage = Math.ceil(number / itemsParPage)
    const pages = Array.from({ length: numberOfPage }, (_, index) => index);

    console.log(pages)
    


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

        // console.log(postData)
      
        // post data to the database 
             
            axiosPublic.post('/posts', postData )
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                toast.success('Post Uploaded')
                  e.target.reset();
                 refetch()
                 navigate('/forum')
                }
              })

      

        
    }

    


    return (
        <div>
            <Navbar></Navbar>
            {
            user != null ?
            <div className="mt-20">
                <div className="pt-10">
                <SectionTitle title={'Added a new'} title1={'Post'}></SectionTitle>
                
                </div>
                <button
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                className="text-white btn btn-outline bg-purple-600 px-6 block mx-auto">Added a New Post</button>
            </div> : <p className="pt-20">
                <SectionTitle title={'Please login to add new '} title1={'post'}> </SectionTitle>
            </p>
            }
            <div>
                <div>
                    {
                        allPost?.result?.map( data => <PostCard key={data._id} data={data}></PostCard> )
                    }
                    <div className="pages text-center my-10">
                      
                        {
                            pages.map((number, i) => <button
                            onClick={() => setCurrentPage(number)}
                            key={i} 
                            className={currentPage === number ? 'selected btn rounded-full bg-purple-400 mr-3 btn-sm ' : "btn  bg-purple-400 rounded-full mr-3 btn-sm"}> {number} </button> )
                        }
                    </div>
                </div>
             
            </div>

                {/* modal for new post */}
               <div>
               <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button  className="btn btn-sm  bg-purple-300 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    
                    <div className="p-4">
                        <h1>Create a new Post</h1>
                        <form onSubmit={handelPost}>
                        <textarea name="text" className="textarea w-full textarea-bordered" placeholder="Text here"></textarea>
                    <input type="file" name="image" accept="image/*" className="file-input-bordered file-input w-full max-w-xs" />
                    <div>
                    <button className="btn bg-purple-500 btn-outline px-7 mt-5 text-white">Post</button>
                    </div>
                        </form>
                   
                    </div>
                </div>
                </dialog>
               </div>
               <Footer></Footer>
        </div>
    );
};

export default Forum;