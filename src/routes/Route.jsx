import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../Pages/Home/Home'
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SingleCoffeeDetails from "../components/SingleCofeeDetails/SingleCoffeeDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Users from "../Pages/Users/Users";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/coffees'),
            },
            {
                path: '/addCoffee',
                element: <PrivateRoute><AddCoffee /></PrivateRoute>
            },
            {
                path: '/users',
                element: <PrivateRoute><Users /></PrivateRoute>,
                loader: () => fetch('https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/user')
            },
            {
                path: '/coffee/:id',
                element: <PrivateRoute>< SingleCoffeeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRoute><UpdateCoffee /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/coffee/${params.id}`)
            },
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
])

export default myCreatedRoute;