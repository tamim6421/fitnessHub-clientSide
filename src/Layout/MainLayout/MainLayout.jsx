import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="text-stone-500">

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;