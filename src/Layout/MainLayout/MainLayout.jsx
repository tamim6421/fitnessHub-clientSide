import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="text-2xl">
            
            
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;