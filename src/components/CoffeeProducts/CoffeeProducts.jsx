import { BsCup } from "react-icons/bs";
import Container from "../ui/Container";
import { useLoaderData } from "react-router-dom";
import CoffeeProductsCard from "./CoffeeProductsCard";
import { useState } from "react";

const CoffeeProducts = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div className="mt-12 md:mt-20">
            <Container>
                <div className="text-center">
                    <p className="font-raleway"><small>--- Sip & Savor ---</small></p>
                    <h2 className="font-rancho text-secondary text-4xl">Our Popular Products</h2>
                    <button className="font-rancho bg-primary py-2 px-5 mt-4 text-xl text-white flex items-center gap-2 mx-auto">Add Coffee <BsCup /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {
                        coffees.map(coffee => <CoffeeProductsCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeProductsCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default CoffeeProducts;


//  bg-[url(https://i.imgur.com/KY7jWt6.png)] h-screen top-0 left-0 right-0