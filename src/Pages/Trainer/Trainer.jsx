import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Trainer = () => {
    return (
        <div>
          <Navbar></Navbar>
          <div className="mt-20">


           <div className="pt-10">
           <Link to='/beTrainer'>
           <button className="btn bg-gray-500 hover:bg-gray-700 text-white uppercase px-10 ">be a trainer</button>
           </Link>
           </div>


          </div>
          
        </div>
    );
};

export default Trainer;