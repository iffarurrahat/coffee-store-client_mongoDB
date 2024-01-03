import { useLoaderData } from "react-router-dom";
import Container from "../ui/Container";

const SingleCoffeeDetails = () => {

    const coffee = useLoaderData()
    const { name, supplier, price, photo, taste, details, category } = coffee || {}
    return (
        <div className="mt-40">
            <Container>
                <div className="flex justify-between items-center gap-6 bg-quaternary md:w-1/2 py-10 px-5 mx-auto">
                    <img src={photo} alt="" />
                    <div className="space-y-2 font-raleway">
                        <h2 className="text-secondary font-rancho text-2xl">Niceties</h2>
                        <p><strong>Name: </strong>{name}</p>
                        <p><strong>Supplier: </strong>{supplier}</p>
                        <p><strong>Taste: </strong>{taste}</p>
                        <p><strong>Category: </strong>{category}</p>
                        <p><strong>Details: </strong>{details}</p>
                        <p><strong>Price: </strong>{price}Taka</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleCoffeeDetails;