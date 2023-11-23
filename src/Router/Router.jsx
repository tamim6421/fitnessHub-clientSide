import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";


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
            }
        ]
    }
])
export default router