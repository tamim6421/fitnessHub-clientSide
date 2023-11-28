/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from './../../../Hooks/useAxiosPublic';



const CheckOutForm = ({info}) => {
  console.log(info)
    const{salary,details, _id, joinDate} = info
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const navigate = useNavigate()
  const ppp =  useAxiosPublic()
  

const numberSalary = parseInt(salary)
// console.log(numberSalary)


// const month = (today - myDate)
// console.log(month)

const calculateMonthDifference = (myDate, today) => {
  const start = new Date(myDate);
  const end = new Date(today);

  // Calculate the difference in months
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  return months;
};

let myDate = new Date(joinDate)
let today = new Date()

const difference = calculateMonthDifference(myDate, today)
// console.log(difference)

const salaryBill = (numberSalary * difference)
console.log(salaryBill)


useEffect(() => {
  ppp.post('/make-payment-intent', { price: salaryBill })
      .then(res => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
      .catch(error => {
        console.error('payment intent:', error);
      
      });
  }, [ppp, salaryBill]);

  const handelPayment = async (event) =>{

    event.preventDefault();
    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message)

      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }

       //   confirm payment 
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card : card,
            billing_details:{
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })

    if(confirmError){
        console.log('confirm error', confirmError)
    }
    else{
        console.log('payment Intent' , paymentIntent)
    }

    if(paymentIntent.status === "succeeded"){
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)

        // update payment status paid  
        axiosSecure.patch(`/accepttrainer/role/${_id}`)
        .then(res =>{
            console.log(res.data)
        })

        // now save the payment in the database 
        const payment = {
            email : user.email,
            price : salaryBill ,
            transactionId: paymentIntent.id,
            date : new Date(), 
            status: 'paid',
            trainerName: details?.name,
            trainerEmail: details?.trainerEmail
        }

        // send data to the db 
      const res = await  axiosSecure.post('/payment', payment)
      console.log(res.data)
      if(res?.data?.insertedId){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500
          });

        //   redirect to payment history page 
        navigate('/dashboard/allTrainers')
      }
    }
  }


    return (
        <div className=" p-5  mx-auto py-10 w-3/6 rounded-lg shadow-md bg-slate-100">
        <form onSubmit={handelPayment}>
          <div className="text-center text-gray-500 p-2">
          <p>Total Months: {difference} </p>
          <p>My salary per month: $ {numberSalary} </p>
          <p>Total Salary: $ {salaryBill} </p>
          </div>
      
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          ></CardElement>
  
          <button className="btn btn-warning text-white btn-sm px-4 mt-3" type="submit" disabled={!stripe || !clientSecret}>
            Pay ${numberSalary}
          </button>
  
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500"> Your Transaction Id :  {transactionId} </p> }
  
        </form>
      </div>
    );
};

export default CheckOutForm;