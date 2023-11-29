import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Title from "../../Components/Title/Title";

const ClassDetails = () => {
  const { className, classTime, description, image } = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-20 p-5">
        <div className="mt-20 text-center mb-10" data-aos="fade-up">
          <Title>Class Details</Title>
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </div>

        <div>
          <div className="card p-4 card-compact md:w-6/12 mx-auto  bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="Shoes"
                className="object-cover w-full max-h-[400px] "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class name </h2>
              <h2 className="card-title text-2xl">{className}</h2>
              <div>
                <p className="text-xl">Class time </p>
                <div>
                        
                   {
                    classTime.map( (c, i) => <li key={i}>
                        {c}
                    </li>)
                   }
                    </div>
              </div>
              <p>{description}</p>
              <div className="card-actions justify-end">
               
              <Link to='/trainer'>
                    <button className="btn bg-purple-600 btn-outline text-white">Join Now --{">"}</button>
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
