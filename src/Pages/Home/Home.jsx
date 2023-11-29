import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Footer from "../../Shared/Footer/Footer";
import Testimunials from "./Testimunials/Testimunials";
import Subscribe from "./Subscribe/Subscribe";
import OurBlog from "./OurBlog/OurBlog";
import HomeClass from "./HomeClass/HomeClass";
import Team from "./Team/Team";


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
            <Subscribe></Subscribe>
            <OurBlog></OurBlog>

            <HomeClass></HomeClass>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;