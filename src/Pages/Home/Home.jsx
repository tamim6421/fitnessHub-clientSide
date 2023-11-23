import Navbar from "../../Shared/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
        </div>
    );
};

export default Home;