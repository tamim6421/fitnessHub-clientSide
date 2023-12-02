import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Trainer from "../Pages/Trainer/Trainer";
import BeTrainer from "../Pages/Trainer/BeTrainer";
import Forum from "../Pages/Forum/Forum";
import Dashboard from "../Layout/DashBoard/Dashboard";
import AdminHome from "../Layout/AdminLayout/AdminHome/AdminHome";
import TrainerHome from "../Layout/Trainer/TrainerHome/TrainerHome";
import ManageSlots from "../Layout/Trainer/ManageSlots/ManageSlots";
import ManageMember from "../Layout/Trainer/MangeMember/ManageMember";
import AllSubscribers from "../Layout/AdminLayout/AllSubscribers/AllSubscribers";
import AllTrainers from "../Layout/AdminLayout/AllTrainers/AllTrainers";
import MemberHome from "../Layout/Member/MemberHome/MemberHome";
import ActivityLoge from "../Layout/Member/ActivityLog/ActivityLoge";
import ProfileSetting from "../Layout/Member/ProfileSetting/ProfileSetting";
import AppliedTrainer from "../Layout/AdminLayout/AppliedTrainer/AppliedTrainer";
import DetailsModal from "../Layout/AdminLayout/AppliedTrainer/DetailsModal";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Payment from "../Layout/AdminLayout/PaymentGetway/Payment/Payment";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Classes/AddClass";
import ClassDetails from "../Pages/Classes/ClassDetails";
import AddedANewForum from "../Layout/AddedANewForum/AddedANewForum";
import AddNewClass from "../Layout/Trainer/AddNewClass/AddNewClass";
import TrainerBook from "../Pages/Trainer/TrainerBook/TrainerBook";
import PaymentBooking from "../Pages/Trainer/TrainerBook/PaymentBooking/PaymentBooking";
import TotalBalance from "../Layout/AdminLayout/Totalbalance/TotalBalance";
import RecommendedClasses from "../Layout/Member/RecommendedClass/RecommendedClasses";
import ContactUs from "../Pages/ContractUs/ContractUs";
import AdminRoute from "./AdminRoute/AdminRoute";
import TrainerRoute from "./TrainerRoure/TrainerRoute";
import BlogDetails from "../Pages/Home/OurBlog/BlogDetails";
import PaymentHistory from "../Layout/Member/PaymentHistory/PaymentHistory";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'gallery',
                element: <Gallery></Gallery>
            },
            {   
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/contract',
                element: <ContactUs></ContactUs>

            },
            {
                path: 'classDetails/:id',
                element: <ClassDetails></ClassDetails>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/getclassdetails/${params.id}`)
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'trainer',
                element:  <Trainer></Trainer>
            },
            {
                path:'beTrainer',
                element: <PrivetRoute><BeTrainer></BeTrainer></PrivetRoute>
            },
            {
                path: 'trainerBook/:id',
                element: <TrainerBook></TrainerBook>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/getslot/${params.id}`)},
            {
                path:'paymentBooking/:id',
                element: <PrivetRoute><PaymentBooking></PaymentBooking></PrivetRoute>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/getslots/${params.id}`,{       
                        headers: {
                            'authorization' : `Bearer ${localStorage.getItem('access-token')}`,
                          },
                })
            },

            {
                path:'/forum',
                element:<Forum></Forum>
            },
            {
                path:'blogsDetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/blog/${params.id}`)

            },
            {
                path: 'detailsTrainer/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/accepttrainer/${params.id}`)
            },
           
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[

            // admin only routes 
            {
                path: 'adminHome',
                element:<AdminRoute> <AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allSubscriber',
                element: <AdminRoute><AllSubscribers></AllSubscribers></AdminRoute>
            },
            {
                path: 'allTrainers',
                element: <AdminRoute> <AllTrainers></AllTrainers></AdminRoute>
            },
            {
                path: 'appliedTrainer',
                element: <AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>
            },
            {
                path: 'trainerDetails/:id',
                element: <DetailsModal></DetailsModal>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/trainers/${params.id}`,{
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                      },
                })
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://fithub-server-eta.vercel.app/accepttrainer/${params.id}`)
            },
          
            {
                path: 'balance',
                element: <AdminRoute> <TotalBalance></TotalBalance></AdminRoute>
            },

            // trainer  only routes 
            {
                path: 'trainerHome',
                element: <TrainerRoute><TrainerHome></TrainerHome></TrainerRoute>
            },
            {
                path: 'manageSlots',
                element: <TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>
            },
            {
                path: 'manageMember',
                element: <TrainerRoute><ManageMember></ManageMember></TrainerRoute>
            },
            {
                path: 'addNewClass',
                element: <TrainerRoute><AddNewClass></AddNewClass></TrainerRoute>
            },

            // member only routes 
            {
                path: 'memberHome',
                element: <MemberHome></MemberHome>
            },
            {
                path: 'activity',
                element: <ActivityLoge></ActivityLoge>
            },
            {
                path: 'memberProfile',
                element: <ProfileSetting></ProfileSetting>
            },
            {
              path: 'newForum',
              element: <AddedANewForum></AddedANewForum>  
            },
            {
                path: 'recommendedClass',
                element: <RecommendedClasses></RecommendedClasses>
            },
            {
                path: 'myPayment',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
])
export default router