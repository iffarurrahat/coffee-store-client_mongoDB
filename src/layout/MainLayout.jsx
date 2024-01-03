import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <p className="mt-20 text-red-600 font-medium">Hello World</p>
        </div>
    );
};

export default MainLayout;