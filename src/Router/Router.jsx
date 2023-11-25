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
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
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
                path: 'trainer',
                element: <Trainer></Trainer>
            },
            {
                path:'/beTrainer',
                element: <BeTrainer></BeTrainer>
            },
            {
                path:'/forum',
                element:<Forum></Forum>
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
        element: <Dashboard></Dashboard>,
        children:[

            // admin only routes 
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'allSubscriber',
                element: <AllSubscribers></AllSubscribers>
            },
            {
                path: 'allTrainers',
                element: <AllTrainers></AllTrainers>
            },
            {
                path: 'appliedTrainer',
                element: <AppliedTrainer></AppliedTrainer>
            },
            {
                path: 'trainerDetails/:id',
                element: <DetailsModal></DetailsModal>,
                loader: ({params}) => fetch(`http://localhost:5000/trainers/${params.id}`)
            },  

            // trainer  only routes 
            {
                path: 'trainerHome',
                element: <TrainerHome></TrainerHome>
            },
            {
                path: 'manageSlots',
                element: <ManageSlots></ManageSlots>
            },
            {
                path: 'manageMember',
                element: <ManageMember></ManageMember>
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
                
            }
        ]
    }
])
export default router