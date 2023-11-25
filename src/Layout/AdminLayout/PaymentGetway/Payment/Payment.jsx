import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../CheckOutForm";
import Title from "../../../../Components/Title/Title";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payment = () => {
    const info = useLoaderData()
    console.log(info)


  return (
    <div className="mt-20">
        <div className=" my-20 text-center" >
            <Title>Pay Trainer Salary </Title>
        </div>

      <Elements stripe={stripePromise}>

            <CheckOutForm
            info = {info}
            ></CheckOutForm>

      </Elements>
    </div>
  );
};

export default Payment;
