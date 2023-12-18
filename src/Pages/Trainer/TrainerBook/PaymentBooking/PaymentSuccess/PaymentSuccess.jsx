import { useParams } from "react-router-dom";
import Footer from "../../../../../Shared/Footer/Footer";
import Navbar from "../../../../../Shared/Navbar/Navbar";


const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div className="">
            <Navbar></Navbar>

            <div className="mt-36 min-h-screen">
            <p className="text-center text-3xl font-bold text-green-500">Payment success</p>
            <p className="text-center">Transactions Id : {tranId}</p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default PaymentSuccess;