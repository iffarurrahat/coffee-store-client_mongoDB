import Swal from "sweetalert2";
import Container from "../ui/Container";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, price, photo } = coffee || {}

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, taste, category, details, price, photo }
        // console.log(newCoffee);

        fetch(`https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="mt-36">
            <Container>
                <div className="text-center">
                    <h2 className="text-tertiary font-rancho text-4xl">Update Existing Coffee Details</h2>
                    <p className="mt-4 mb-8 md:w-1/2 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="bg-quaternary p-10 md:p-20 rounded">
                    <form onSubmit={handleUpdateCoffee}>
                        {/* form row name and quantity */}
                        <div className="md:flex gap-0 md:gap-5 mb-3">
                            <div className="form-control md:w-1/2 mb-3 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" defaultValue={name} required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" defaultValue={quantity} required />
                            </div>

                        </div>
                        {/* form row supplier and taste */}
                        <div className="md:flex gap-0 md:gap-5 mb-3">
                            <div className="form-control md:w-1/2 mb-3 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Supplier Name</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" defaultValue={supplier} required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" defaultValue={taste} required />
                            </div>

                        </div>
                        {/* form row category and details */}
                        <div className="md:flex gap-0 md:gap-5 mb-3">
                            <div className="form-control md:w-1/2 mb-3 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" defaultValue={category} required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" defaultValue={details} required />
                            </div>
                        </div>
                        {/* form row photo and price */}
                        <div className="md:flex gap-0 md:gap-5 mb-3">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} required />
                            </div>
                            <div className="form-control md:w-1/2 mb-3 md:mb-0">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={photo} required />
                            </div>
                        </div>
                        <input type="submit" className="btn btn-block mt-5 bg-primary font-rancho text-lg" value="Update Coffee" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default UpdateCoffee;