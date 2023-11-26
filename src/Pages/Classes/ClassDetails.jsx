import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";


const ClassDetails = () => {
    const {className, classTime, description, image} = useLoaderData()
 
    return (
        <div>
            
            <Navbar></Navbar>
            <div className="mt-20 p-5">
                <div className="mt-20 text-center mb-10">
                    <Title>Class Details</Title>
                </div>
            {/* <img src="https://i.ibb.co/gP18xPY/pexels-victor-freitas-791763.jpg" className="h-[40vh]" alt="" /> */}
                <div >
                <div className="card flex bg-purple-200 p-3 flex-col md:flex-row card-side  md:w-3/4 mx-auto shadow-xl">
                <div>
                <figure><img src={image} alt="Movie" className="w-[300px]" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold ">{className}</h2>
                  <div>
                  <p className="text-xl">Descriptions</p>
                    <p className="">{description}</p>

                    <div>
                        <p>Class Time :</p>
                   {
                    classTime.map( (c, i) => <li key={i}>
                        {c}
                    </li>)
                   }
                    </div>
                  </div>
                    <div className="card-actions justify-end">
                    <Link to='/trainer'>
                    <button className="btn bg-purple-600 btn-outline text-white">Join Now</button>
                    </Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;