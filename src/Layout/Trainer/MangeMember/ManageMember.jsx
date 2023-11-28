import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Title/Title";
import { MdEmail } from "react-icons/md";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import useAuth from "../../../Hooks/useAuth";

const ManageMember = () => {
  const axiosSecure = useAxiosSecure();
  const form = useRef();

  // get all user
  const {
    data: allUser = [],
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/alluser");
      return res.data;
    },
  });
  // console.log(allUser)
  const getMember = allUser?.filter((allUser) => allUser.role == "member");
  console.log(getMember);

  const handelSendEmail = async (e) => {
    try {
      e.preventDefault();

      // Send email using async/await
      const result = await emailjs.sendForm(
        "service_mae6y8e",
        "template_fg1ljqu",
        form.current,
        "Q6AHY20suZ7Ts2NPU"
      );

      console.log(result.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-5 mt-5">
      <div className="text-center mt-20 mb-10">
        <Title>Manage Members</Title>
      </div>

      <div>
        <div className="overflow-x-auto w-3/4 mx-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-purple-500 text-white font-semibold text-sm">
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Send Email</th>
              </tr>
            </thead>
            <tbody>
              {getMember?.map((member, i) => (
                <tr key={member._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={member?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{member?.name}</div>
                        <div className="text-sm opacity-50">
                          Dhaka Bangladesh{" "}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{member?.email}</span>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {member?.role}
                    </span>
                  </td>
                  <th className="">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="btn bg-purple-200   btn-sm"
                    >
                      {" "}
                      <MdEmail className="text-2xl text-green-500" /> Email
                    </button>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle bg-red-500 text-white absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div>
                          {/* send email from  */}
                          <div className=" text-center">
                            <form ref={form} onSubmit={handelSendEmail}>
                              <label className="label">
                                <span className="label-text text-center "></span>
                              </label>
                              <input
                                type="text"
                                defaultValue={member?.name}
                                name="name"
                                placeholder="User Name"
                                className="input input-bordered input-primary w-full max-w-xs"
                              />

                          

                              <label className="label">
                                <span className="label-text"></span>
                              </label>
                              <input
                                type="email"
                                name="user_email"
                                defaultValue={member?.email}
                                placeholder="User Email"
                                className="input input-bordered input-primary w-full max-w-xs"
                              />

                              <label className="label">
                                <span className="label-text"></span>
                              </label>
                              <textarea
                                name="massage"
                                className="textarea textarea-primary"
                                placeholder="Message"
                              ></textarea>

                              <div>
                                <input
                                  className="btn bg-purple-700 text-white px-7 btn-sm "
                                  type="submit"
                                  value="Send"
                                />
                              </div>
                            </form>
                          </div>
                        </div>

                      </div>
                    </dialog>


                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMember;
