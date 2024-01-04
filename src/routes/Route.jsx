import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../Pages/Home/Home'
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SingleCoffeeDetails from "../components/SingleCofeeDetails/SingleCoffeeDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: '/coffee/:id',
                element: <PrivateRoute>< SingleCoffeeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRoute><UpdateCoffee /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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