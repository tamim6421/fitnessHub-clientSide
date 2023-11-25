import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div>
            this is admin layout
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;