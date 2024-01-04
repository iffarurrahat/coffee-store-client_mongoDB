import { Link } from "react-router-dom";


const SignUp = () => {

    const handleSignIn = event => {
        event.preventDefault()

        const form = event.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

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
                        <input type="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 mb-4">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p>Already you have an account <Link to='/signin' className="text-purple-600 font-bold ">SignIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;