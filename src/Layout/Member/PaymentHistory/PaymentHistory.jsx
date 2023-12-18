import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Title/Title";
import Loader from "../../../Components/Loader/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axisSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()

  const {data:sslPay, isLoading:loading} = useQuery({
    queryKey: ['sslPay'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/allsslpayment')
      return res.data
    }
  })


  // console.log(sslPay)
  const sslEmail = sslPay?.filter(mail => mail.info.userInfo.email == user?.email )
  // console.log(sslEmail)


  const { data: allPay, isLoading } = useQuery({
    queryKey: ["allPay"],
    queryFn: async () => {
      const res = await axisSecure.get(`/memberPay`);
      return res.data;
    },
  });


 
  if (isLoading) return <Loader></Loader>;

  const myPay = allPay?.filter((pay) => pay?.userInfo?.email === user?.email);
  // console.log(myPay);

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div className="mb-20 overflow-hidden">
      <div className="text-center mt-10">
        <Title>My payment history</Title>
      </div>

      <div>
        <div>
          {myPay?.length || sslEmail.length  > 0 ? (
            <>
              <div>
                <p className="text-center mt-10 mb-2 text-xl">Stripe payment history </p>
                <div className="overflow-x-auto px-5 md:ml-10  md:px-20 ">
                  <table className="table shadow-xl">
                    {/* head */}
                    <thead className="bg-purple-500 text-white">
                      <tr>
                        <th>
                          <label>number</label>
                        </th>
                        <th>Day</th>
                        <th>Time</th>
                        <th> Date</th>
                        <th> Money</th>
                        <th> Transaction Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myPay?.map((pay, i) => (
                        <tr key={i}>
                          <th>
                            <label>{i}</label>
                          </th>
                          <td>{[pay?.day]}</td>
                          <td>{pay?.time}</td>

                          <th>{pay?.date.slice(0, 10)}</th>
                          <th>{pay?.price}</th>
                          <th>{pay?.transactionId}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


              <div>
              <p className="text-center mt-10 mb-2 text-xl">SSLcommerz payment history </p>
                <div className="overflow-x-auto px-5 md:ml-10  md:px-20">
                  <table className="table shadow-xl">
                    {/* head */}
                    <thead className="bg-purple-500 text-white">
                      <tr>
                        <th>
                          <label>number</label>
                        </th>
                        <th>Day</th>
                        <th>Time</th>
                        <th> Date</th>
                        <th> Money</th>
                        <th> Transaction Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sslEmail?.map((pay, i) => (
                        <tr key={i}>
                          <th>
                            <label>{i}</label>
                          </th>
                          <td>{[pay?.info?.day]}</td>
                          <td>{pay?.info?.time}</td>

                          <th>{pay?.info?.date.slice(0, 10)}</th>
                          <th>{pay?.price}</th>
                          <th>{pay?.transactionId}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="text-2xl font-bold"> No Payment</div>
                <div className="font-light text-neutral-500 mt-2">
                  {" "}
                  No Data{" "}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
