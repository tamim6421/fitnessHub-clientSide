/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const PostCard = ({data}) => {
    const {host, image, post, role} = data
    // console.log(data)
    const [like, setLike] = useState(210),
    [isLike, setIsLike] = useState(false)

    const handelLike = () =>{
        setLike(like + (isLike ? -1 : 1))
        setIsLike (!isLike)
    }
    return (
        <div className="mt-20 flex items-center justify-center">
            <div className="relative p-4 flex w-full max-w-[26rem] flex-col bg-slate-50 shadow-lg bg-transparent bg-clip-border text-gray-700 ">
  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src={host.image}
      alt="tania andrew"
      className="relative inline-block  h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block font-sans text-xl text-gray-500  font-semibold text-blue-purple-900">
         {host.name}
        </h5>
        
        
      </div>
      {
  role === 'admin' ? (
    <p className="bg-green-400 max-w-max px-1 rounded-lg text-sm text-white">
      {role}
    </p>
  ) : role === 'member' ? (
    <p className="bg-yellow-400 max-w-max px-1 rounded-lg text-sm text-white">
      {role}
    </p>
  ) : (
    <p className="bg-orange-600 max-w-max px-1 rounded-lg text-sm text-white">
      {role}
    </p>
  )
}
    </div>
  </div>
 
  <div className="p-0 mb-6">

    <p className="block font-sans text-base text-gray-400">
     {post}
    </p>
  </div>
  <div className="flex items-center justify-center rounded-lg">
    <img src={image} alt="" className="w-[280px] h-[250px] box object-cover" />
  </div>
    
    {/* like comments sections  */}
  <div className="flex mt-5 gap-5 justify-evenly">

          
        <div className="flex gap-1 justify-center  p-1 rounded-xl px-2" onClick={handelLike}>

        <div>
        <p>{like} likes </p>
        <p className="flex items-center">
        <AiFillLike className={(isLike ? "text-3xl text-blue-400":"text-3xl" )} /> <span className="text-sm">likes</span>
        </p>
        
        </div>
        </div>
        <div>
          <p>
           80 comments 
          </p>
        
        <p className="flex items-center gap-1">
        <FaComments  className="text-3xl" /> <span className="text-sm">comments</span>
        </p>
        </div>
        <div>
          <p>
            50 share
          </p>
       
        <p className="flex items-center gap-1">
        <FaShareAlt  className="text-2xl" /><span className="text-sm">share</span>
        </p>
        
        </div>
  </div>
</div>
        </div>
    );
};

export default PostCard;