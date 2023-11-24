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
    }
])
export default router