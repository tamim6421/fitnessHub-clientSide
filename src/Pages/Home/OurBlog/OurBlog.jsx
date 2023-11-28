import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import BlockCard from "./BlockCard";
import { Link } from "react-router-dom";


const OurBlog = () => {
    const axiosPublic = useAxiosPublic()
    const [blogs, setBlogs] = useState()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosPublic.get('/blog');
                setBlogs(response.data);
            } catch (error) {
                console.error("blog data:", error);
            }
        };

        fetchBlogs();
    }, [axiosPublic]);

    const displayBlog = blogs?.slice(0, 3)
    // console.log(displayBlog)



    return (
        <div>
            <div className="mt-36 mb-20 text-center" data-aos="fade-up">
                <Title>Our  Articles & Blogs</Title>
            </div>

            <div className="grid gap-16 grid-cols-1 md:grid-cols-3">
                {
                    displayBlog?.map( blog => <BlockCard key={blog._id} blog={blog}></BlockCard>)
                }
            </div>
            
          <Link to='/forum'> 
          <button data-aos="fade-up" className="btn bg-red-600 text-lg text-white px-10 mt-10 block mx-auto btn-outline">Explore Our Forums Posts</button>
          </Link>

        </div>
    );
};

export default OurBlog;