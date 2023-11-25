

const Modal = () => {
    return (
        <div>
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    
                    <dialog id="my_modal_3" className="modal">
                    <div className="modal-box  max-w-[48rem]">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle bg-gray-600 text-red-500 absolute right-2 top-2">✕</button>
                        </form>
                        cart details 
                        <div>
                        <div className="relative flex flex-col p-5 w-full md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative md:w-2/5 overflow-hidden text-gray-700 bg-white rounded-r-none  md:shrink-0  rounded-xl ">
                            <img
                            src={image}
                            alt="image"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                           <div>
                           <h6 className="block mb-4  uppercase">
                            {name}
                            </h6>
                            <p>
                                {role}
                            </p>
                           </div>
                            <div>
                            <h4 className="block mb-2 ">
                            email <span>{trainerEmail}</span>
                            </h4>
                            
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            Age <span>{age}</span>
                            </h4>
                            </div>

                            <div>
                            <h4 className="block mb-2 ">
                            <span>{yearOfExperience} </span> Of Experience 
                            </h4>
                            </div>

                            <div>
                                <h1>Skills</h1>
                                {
                                    skills?.map((s, i) => <li key={i}>{s}</li>)
                                }
                            </div>
                            
                            <div className="mt-2 flex flex-col md:flex-row gap-5">
                                <div>
                                <p>Available Time in a Day</p>
                                    <div>
                                        {
                                            days?.map((d, i) => <li key={i}>{d}</li> )
                                        }
                                    </div>
                                </div>
                                <div>
                                <p>Available Time in a Week</p>
                                    <div>
                                        {
                                            time?.map((t, i) => <li key={i}>{t}</li> )
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10">
                                {
                                    icons?.map ((icon, i) =>
                                     <button
                                     className="btn btn-sm bg-white mr-2 my-2"
                                     key={i}>
                                        <img src={icon} alt="" />

                                     </button>)
                                }
                            </div>
                         
                            <div className="mt-8">
                                <div >
                                    <button 
                                    onClick={handelAccept}
                                    className="btn btn-outline bg-gray-500 btn-sm text-white mr-10">Accept</button>
                                    <button className="btn bg-red-500 btn-sm hover:bg-red-600 text-white mr-10">Reject</button>
                                </div>
                            </div>
                        </div>
                        </div>


                        </div>
                    </div>
                    </dialog>
            </div>
        </div>
    );
};

export default Modal;