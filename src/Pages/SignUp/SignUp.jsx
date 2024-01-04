import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";



const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                // profile update
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                });


                // post for backend
                const createdAt = result?.user?.metadata?.creationTime;
                // const lastSignIn = result?.user?.metadata?.lastSignInTime;
                const user = { email, createdAt }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })


                // reset password
                form.reset();

                //navigate after login 
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => {
                console.log(error.message);

            })

    }

    return (
        <div className="bg-quaternary">
            <div className="md:w-1/2 h-screen  mx-auto flex items-center ">
                <form onSubmit={handleSignIn} className="card-body">
                    <h2 className="text-3xl font-rancho flex items-center justify-center gap-3 mb-4">Please Sign Up <span>😽</span></h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <button className="btn bg-secondary text-white">Sign Up</button>
                    </div>
                    <p>Already you have an account <Link to='/signin' className="text-purple-600 font-bold ">SignIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;