/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

import str from '../../../../assets/stripe.png'
import ssl from '../../../../assets/ssl.png'




const TrainnerCheckoutForm = ({data}) => {
 
  
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const navigate = useNavigate()
  

 
  // console.log(data)
  // console.log(localStorage.getItem('access-token'));
  

useEffect(() => {
    axiosPublic.post('/make-payment-intent', { price: data?.price })
      .then(res => {
        console.log(res.data);
        setClientSecret(res.data.clientSecret);
      })
      .catch(error => {
        console.error('payment intent:', error);
      
      });
  }, [axiosPublic,data?.price  ]);

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

        // now save the payment in the database 
        const paymentData = {
            userInfo: user,
            trainerName: data?.trainerName,
            price : data?.price,
            package: data?.package,
            day: data?.day,
            time: data?.time,
            transactionId: paymentIntent.id,
            date : new Date(), 
            status: 'paid',
            trainerId: data?.trainerId,
            slotId: data?._id
        }

        // send data to the db 
      const res = await  axiosSecure.post('/userpayment', paymentData, )
      console.log(res.data)
      if(res?.data?.insertedId){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/trainer')
        
      }
    }


  }

 


  if (!data || data.package === null) {
    return <p className="text-center mt-36">Please reload the page.........</p>;
  }




  // handel ssl Commrez 
  const handelPaymentInSSL = () => {
   
    const paymentData = {
      userInfo: user,
      trainerName: data?.trainerName,
      price : data?.price,
      package: data?.package,
      day: data?.day,
      time: data?.time,
      date : new Date(), 
      status: 'paid',
      trainerId: data?.trainerId,
      slotId: data?._id
  }
  console.log('payment ssl', paymentData)

    fetch('https://fithub-server-eta.vercel.app/sslpayment', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(paymentData)
    })
    .then(res => res.json())
    .then(data => {
      window.location.replace(data.url)
      console.log(data)
    })



  }

    return (
        <div className=" my-20 p-5  mx-auto py-10 md:w-3/6 rounded-lg shadow-md bg-green-50">
        <form onSubmit={handelPayment}>

        <div>
                
                <div className="card ">
                <div className="card-body ">
                <h1 className="text-center text-xl font-bold">Your Selected Package </h1>
                <hr />
                    <h2 className="card-title">
                        <>Trainer : <>{data?.trainerName} </> </>
                    </h2>
                    <div>
                        <h1>Package : <span className="text-lg font-semibold"> {data?.package} </span></h1>
                    </div>
                    <div className="flex justify-start"> 
                      
                        <p> Day : {data?.day}</p>
                    </div>
                        <span> Time : {data?.time} </span>
                    
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
                    
                    </div>
                </div>
                </div>
            </div>
      
         <div className="px-16 bg-green-200 p-4 rounded-md">
         <div className="flex justify-center items-center mb-10 gap-8">
        <p className="  text-2xl text-orange-400 drop-shadow-lg text-center mt-6 font-bold">Make Payment <br /> With </p>
          <img className="w-36  text-center" src={str} alt="" />
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
           <button className="btn btn-warning mt-3 block mx-auto px-4 mt-3" type="submit" disabled={!stripe || !clientSecret}>
            Pay ${data?.price}
          </button>
         </div>
  
         
  
            <p className="text-red-500">{error}</p>
            {transactionId && <p className="text-green-500"> Your Transaction Id :  {transactionId} </p> }
  
        </form>
        <div className="bg-green-200 text-center p-5 mt-5">
          <div className="flex justify-center items-center gap-8">
        <p className="  text-2xl text-orange-400 drop-shadow-lg  mt-6 font-bold">Make Payment <br /> With </p>
          <img className="w-56  text-center" src={ssl} alt="" />
          </div>
          <button
         onClick={ handelPaymentInSSL}
          className="btn  btn-warning drop-shadow-xl mt-5">Pay $ {data?.price}</button>
        </div>
      </div>
    );
};

export default TrainnerCheckoutForm;