import { useLoaderData } from "react-router-dom";
import Title from "../../../../Components/Title/Title";
import Navbar from "../../../../Shared/Navbar/Navbar";
import useAuth from "../../../../Hooks/useAuth";

// for stripe 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import TrainnerCheckoutForm from "./TrainnerCheckoutForm";
// import CheckOutForm from "../CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const PaymentBooking = () => {
    const data = useLoaderData()
    const {user, loading} = useAuth()
    const info = useLoaderData()

    if (!data || data.package === null) {
        return <p>Please reload the page.</p>;
      }
    console.log(user)

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
            {/* <div>
                
                <div className="card w-2/4 mx-auto bg-purple-100 shadow-xl">
                <div className="card-body ">
                <h1 className="text-center text-xl font-bold">Your Selected Package </h1>
                    <h2 className="card-title">
                        <span>Trainer Name: {data?.trainerName} </span>
                    </h2>
                    <p> 
                        <p>Slot: {data?.day}</p>
                        <span>{data?.time} </span>
                    </p>
                    <div>
                        <h1>Package : {data?.package} </h1>
                    </div>
                    <div>
                        <h1>Price  : ${data?.price} </h1>
                    </div>

                    <div>
                        <p>Your Info :</p>
                        <p>Name : <span>{user?.displayName}</span> </p>
                        <div>
                            <p> {user?.email}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn bg-purple-600 hover:bg-purple-800 text-white">Payment</button>
                    </div>
                </div>
                </div>
            </div> */}
           </div>
        </div>
    );
};

export default PaymentBooking;