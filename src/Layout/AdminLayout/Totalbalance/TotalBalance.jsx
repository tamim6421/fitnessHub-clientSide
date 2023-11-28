import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react";



const TotalBalance = () => {
    const axiosSecure = useAxiosSecure()
    const chartRef = useRef(null)
    const chartInstance = useRef(null)

    

    // get total balance 
    const {data:totalBalance = [], isLoading} = useQuery({
        queryKey: ['totalBalance'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/getBalance')
            return res.data
        }
      })

      // console.log(totalBalance[0]?.total_balance)

    //   get remaining balance
    const {data:paymentBalance = []} = useQuery({
        queryKey: ['paymentBalance'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/remaininbalance')
            return res.data
        }
      })
      console.log(paymentBalance)
      
      const pay = paymentBalance.reduce( (bal, p) => bal + p.price ,0)
    //  console.log(pay)

// get all subscribers 
const {data:subscribers = []} = useQuery({
    queryKey: ['subscribers'],
    queryFn: async() =>{
        const res = await axiosSecure.get('/allsubscriber')
        return res.data
    }
  })
const totalSubscribers = (subscribers?.length)



// member payed 
const {data:paymentByMember = []} = useQuery({
    queryKey: ['paymentByMember'],
    queryFn: async() =>{
        const res = await axiosSecure.get('/memberPay')
        return res.data
    }
  })
console.log(paymentByMember.length)
  const totalPaidMember = (paymentByMember.length)

const memberPay = paymentByMember?.reduce( (bal, p) => bal + p.price ,0)
console.log(memberPay)
const remaining = (totalBalance[0]?.total_balance - pay)
const balanceNow = (remaining + memberPay)




// for chart 

useEffect( () =>{
  if(chartInstance.current){
    chartInstance.current.destroy()
  }
  const myChart = chartRef.current.getContext('2d')
  chartInstance.current = new Chart (myChart, {
    type: 'doughnut',
    data: {
      labels: [
        'Total Subscribers',
        'Total Paid Member',
      ],
      datasets: [{
      
        data: [totalSubscribers, totalPaidMember],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    }
  })
  return () =>{
    if(chartInstance.current){
      chartInstance.current.destroy()
    }
  }
} ,[totalPaidMember, totalSubscribers])

    return (
        <div>
           <div>
            <SectionTitle title={"Total & "} title1={'Remaining Balance'}  ></SectionTitle>
           </div>

           <div>
           <div className="stats flex w-2/3 mx-auto mt-10 text-center shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-xl font-bold">Total Remaining Balance</div>
    <div className="stat-value text-primary"> $ {balanceNow}</div>
    <p> My Total Balance Was: {totalBalance[0]?.total_balance} </p>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-xl font-bold">Total Payment </div>
    <div className="stat-value text-secondary">$ {pay}</div>
   
  </div>

  
</div>

        {/* added pie chart  */}
        <div className="my-16">
            <p className="text-purple-500 text-3xl font-bold text-center mb-10">Total Newsletter Subscriber  <span className="text-blue-500 text-5xl">VS</span> <br />
                Total Paid Members
             </p>

             <div className="w-[300px] mx-auto">
              <canvas ref={chartRef} style={{width: '200px', height:'200px'}}></canvas>
             </div>
        </div>

            {/* show payment transactions  */}
              
                      <p className="text-center text-2xl text-purple-500 font-semibold my-10">
                    Our Members Payment Transactions
                      </p>
                      <div>

                      <div className="overflow-x-auto mb-20 px-20">
            <table className="table table-zebra ">
              {/* head */}
              <thead className="bg-purple-500 text-white text-lg">
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Transaction Id </th>
                  <th>Pay Mony</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
             
               {
                paymentByMember?.slice(-6).map( (pay, i) =>  <tr key={i}>
                  <th>{i+1}</th>
                  <td>{pay?.userInfo?.displayName}</td>
                  <td>{pay?.userInfo?.email}</td>
                  <td>{pay?.date.slice(0,10)}</td>
                  <td>{pay?.transactionId}</td>
                  <td>{pay?.price}</td>

                  <td><div className="badge bg-green-500  px-4 py-3 text-white">{pay?.status}</div></td>
                </tr>
         )
               }
                
              </tbody>
            </table>
          </div>
            </div>
             




           </div>
        </div>
    );
};

export default TotalBalance;