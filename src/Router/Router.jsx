import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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