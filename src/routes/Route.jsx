import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from '../Pages/Home/Home'
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import SingleCoffeeDetails from "../components/SingleCofeeDetails/SingleCoffeeDetails";

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
                element: < SingleCoffeeDetails />,
                    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
                // loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)

            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default myCreatedRoute;