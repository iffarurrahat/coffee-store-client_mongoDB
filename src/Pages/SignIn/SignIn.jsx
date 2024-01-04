import { Link } from "react-router-dom";

const SignIn = () => {


    const handleSignUp = event => {
        event.preventDefault()

        const form = event.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div className="bg-quaternary">
            <div className="md:w-1/2 h-screen  mx-auto flex items-center ">
                <form onSubmit={handleSignUp} className="card-body">
                    <h2 className="text-3xl font-rancho flex items-center justify-center gap-3 mb-4">Please Sign In<span>😽</span></h2>
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
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                    <p>You do not have an account <Link to='/signup' className="text-purple-600 font-bold ">SignUp</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;