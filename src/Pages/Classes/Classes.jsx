import Title from "../../Components/Title/Title";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";
import AddClass from "./AddClass";
import DailyRutine from "./DailyRutine";


const Classes = () => {
    const {user} = useAuth()
    


   
    


    return (
        <div className="">
            <Navbar></Navbar>
            <div className="mt-20">

            <div className="text-center mb-10 mt-36">
                <Title>Weekly  Schedule </Title>
            </div>

            <div className="w-3/5 mx-auto">
            <DailyRutine></DailyRutine>
            </div>

        {/* added a new class  */}
         <div className="pt-20 mb-10">
            <AddClass></AddClass>
         </div>

            </div>
        
        </div>
    );
};

export default Classes;