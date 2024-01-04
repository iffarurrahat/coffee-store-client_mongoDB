import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const CoffeeProductsCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, price, photo } = coffee || {}

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this coffee!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        // automatically update UI when I delete a coffee 
                        const remaining = coffees.filter(coffee => coffee._id !== _id)
                        setCoffees(remaining)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }


    return (
        <div className="flex  justify-evenly items-center bg-quaternary rounded-md">
            <img src={photo} alt="" />
            <div>
                <p><strong>Name:</strong> {name}</p>
                <p className="py-3"><strong>Chef:</strong> {supplier}</p>
                <p><strong>Price:</strong> {price}Taka</p>
            </div>
            <div className="text-white">
                <Link to={`/coffee/${_id}`}>
                    <button className="bg-primary p-2 block rounded"><FaRegEye /></button>
                </ Link >
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="bg-tertiary p-2 block rounded my-2"><CiEdit /></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="bg-red-600 p-2 block rounded"><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeProductsCard;