import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Footer from "../../Shared/Footer/Footer";
import Testimunials from "./Testimunials/Testimunials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    FitnessHub | Home
                </title>
            </Helmet>

            <Navbar></Navbar>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Testimunials></Testimunials>

            <Footer></Footer>
        </div>
    );
};

export default Home;