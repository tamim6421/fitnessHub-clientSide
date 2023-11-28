import Title from "../../../Components/Title/Title";
import run from '../../../assets/featured/run.svg'
import boll from '../../../assets/featured/ball_b-4-ia.svg'
import bike from '../../../assets/featured/indoor_bike_pwa4.svg'
import meditation from '../../../assets/featured/undraw_meditation_re_gll0.svg'
import ation from '../../../assets/featured/pilates_ltw9.svg'
import weight from '../../../assets/featured/weight-lifting.svg'

const Featured = () => {
    return (
        <div className="mt-36 overflow-hidden">
           <div className="text-center "  data-aos="fade-up">
           <Title> Our Featured </Title>
           <p className="text-lg">Transform your body, mind, and life today</p>
           </div>

           <div className="mt-20 grid gap-5 grid-cols-1 px-5 py-4 md:grid-cols-3">


           <div className="card  bg-base-100  shadow-xl" data-aos="fade-right">
                <figure className="px-10 pt-10 box">
                    <img src={bike} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Indore Bike </h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>


           <div className="card  bg-base-100  shadow-xl" data-aos="fade-left">
                <figure className="px-10 pt-10 box">
                    <img src={meditation} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Meditation </h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>
           <div className="card  bg-base-100  shadow-xl" data-aos="fade-up">
                <figure className="px-10 pt-10 box">
                    <img src={weight} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Musculation </h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>


           <div className="card  bg-base-100  shadow-xl" data-aos="fade-left">
                <figure className="px-10 pt-10 box">
                    <img src={boll} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Body Blitz  </h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>
           <div className="card  bg-base-100  shadow-xl" data-aos="fade-down">
                <figure className="px-10 pt-10 box">
                    <img src={ation} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Strength and Mass</h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>

           <div className="card  bg-base-100  shadow-xl" data-aos="fade-left">
                <figure className="px-10 pt-10 box">
                    <img src={run} alt="Shoes" className="rounded-xl w-[200px]" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-purple-900 text-2xl font-bold"> Iron Forge Fitness </h2>
                    <p className="text-xl">Facilities geared towards helping individuals gain muscle mass  </p>
                    
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;