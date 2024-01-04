import { useLoaderData } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser);
    const [users, setUsers] = useState(loadedUser);

    const handleUserDelete = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // <-!---- fetch----->
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Users has been deleted.",
                                icon: "success"
                            });

                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining)
                        }
                    })
            }
        });
    }

    return (
        <>
            <Container>
                <div className="overflow-x-auto md:h-[70vh] mt-40">
                    <table className="table">
                        {/* <-!-----head-----> */}
                        <thead>
                            <tr>
                                <th>Index No</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last SignIn</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <-!-----row-----> */}
                            {
                                users.map((user, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUserDelete(user._id)} ><MdDelete className="text-red-600 text-2xl" /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default Users;