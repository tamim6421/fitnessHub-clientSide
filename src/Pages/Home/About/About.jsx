import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div>
            <SectionTitle title = "About" title1="FitHub" des=" CrossFit workouts are comprised of constantly varied"></SectionTitle>

            <div>
            <div className="card lg:card-side bg-base-100 ">
                <div>
                <figure><img className="" src= "https://i.ibb.co/127Fjx2/pexels-anush-gorak-1431282.jpg" alt="Album"/></figure>
                </div>
                <div className="space-y-16 ml-8">
                 <div className="space-y-5">
                 <h2 className="card-title text-2xl text-stone-800">Your to Liform</h2>
                    <p className="text-xl text-stone-500">Cycling is a perfect activity to train your heart and muscles simultaneously and effectively</p>
                    <p className="text-xl text-stone-500">CrossFit workouts are comprised of constantly varied functional movements at high intensity.</p>
                 </div>
                   
                   <div  className="space-y-5">
                   <h2 className="card-title text-2xl text-stone-800">Professional Coaches</h2>
                    <p className="text-xl text-stone-500">We started a tradition when our doors first opened in 2005 of doing introductions at the beginning of each class – a tradition which has been adopted by CrossFit gyms all over the country. Our belief is that while CrossFit isn’t for everyone, anyone can do CrossFit.</p>
                   </div>
                    
                </div>
                </div>
            </div>

            <div>
                <SectionTitle title={"World Class"} title1={"Facilities"} des={"What We Offering"}></SectionTitle>
                




                <div>
                    <div className="grid gap-5 md:grid-cols-2">
                    <div className="card  bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/RCqvQ4C/crossfit-svg1.webp" alt="Shoes" className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-gray-500">
                                    Cycling & Cardio</h2>
                            <p>Cycling is a perfect activity to train your heart and muscles simultaneously and effectively.</p>
                           
                        </div>
                        </div>
                    <div className="card  bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/3SFJf8m/crossfit-svg2.webp" alt="Shoes" className="rounded-xl w-16" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                            CrossFit</h2>
                            <p>CrossFit workouts are comprised of constantly varied functional movements at high intensity.</p>
                           
                        </div>
                        </div>
                    <div className="card  bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/yWpv7d7/crossfit-svg3.webp" alt="Shoes" className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                            Body Pump</h2>
                            <p>
Provides participants with an all-over muscular endurance workout that is set to music</p>
                           
                        </div>
                        </div>
                    <div className="card  bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img  src="https://i.ibb.co/hgMwtmd/crossfit-svg4.webp" alt="Shoes" className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                            Kettlebells</h2>
                            <p>CСompetitors attempt to lift as much weight as possible for one repetition in Squat, Bench</p>
                           
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;