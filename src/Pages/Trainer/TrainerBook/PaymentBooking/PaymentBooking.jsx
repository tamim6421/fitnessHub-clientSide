import { useLoaderData } from "react-router-dom";
import Title from "../../../../Components/Title/Title";
import Navbar from "../../../../Shared/Navbar/Navbar";


// for stripe 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TrainnerCheckoutForm from "./TrainnerCheckoutForm";
// import CheckOutForm from "../CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const PaymentBooking = () => {
    const data = useLoaderData()
    // console.log(data)
   

    return (
        <div>
           <Navbar></Navbar>
           <div className="mt-20">
            <div className="pt-16 mb-10 text-center">
            <Title>Make Payment </Title>
            </div>

                <div>
                <Elements stripe={stripePromise}>

                <TrainnerCheckoutForm
                data = {data}
                ></TrainnerCheckoutForm>

                </Elements>
                </div>
         
           </div>
        </div>
    );
};

export default PaymentBooking;