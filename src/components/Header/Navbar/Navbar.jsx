import { useContext, useState } from "react";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/addCoffee', name: 'Add Coffee' },
        { id: 3, path: user ? '/' : '/signin', name: user ? 'Sign Out' : 'Sign In' },
    ];

    const handleSignOut = () => {
        logOut(); // Call the logOut function from AuthContext
        setOpen(false); // Close the menu after signing out
    };

    return (
        <div className="absolute top-0 left-0 right-0 z-50 bg-[url(https://i.imgur.com/cxDYFdr.jpg)]">
            <nav className="flex items-center justify-between py-2 max-w-screen-xl mx-auto px-3 md:px-6 lg:px-1 text-white">
                <h1>
                    <Logo></Logo>
                </h1>
                <div>
                    <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                        {
                            open ? <RiCloseLine /> : <RiMenu2Line />
                        }
                    </div>
                    <ul className={`md:flex gap-16 absolute md:static bg-slate-200 md:bg-transparent mr-4 md:mr-0 right-0 px-6 md:px-0 py-4 rounded-lg font-rancho text-xl ${open ? 'top-16' : '-top-60'}`}>
                        {
                            routes.map(route => (
                                <li key={route.id}>
                                    {user && route.name === 'Sign Out' ? (
                                        <NavLink to={route.path} onClick={handleSignOut} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }>
                                            {route.name}
                                        </NavLink>
                                    ) : (
                                        <NavLink to={route.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }>
                                            {route.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


