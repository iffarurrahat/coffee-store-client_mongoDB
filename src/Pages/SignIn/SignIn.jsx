import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {

    const { user, signInUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = { 
                    email,
                    lastLoggedAt: result?.user?.metadata?.lastSignInTime,
                }
                // update last logged at in the database
                fetch('https://coffee-store-server-fzk2ikf61-iffarur-rahats-projects.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                // form reset
                form.reset();

                //navigate after login 
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    }


    // signIn with google
    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);

                //navigate after google signIn
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-quaternary">
            <div className="md:w-2/5 h-screen  mx-auto flex items-center ">
                <form onSubmit={handleSignUp} className="card-body bg-white rounded-lg mx-4 md:mx-0">
                    <h2 className="text-3xl font-rancho flex items-center justify-center gap-2 mb-4">Please Sign In<span>😽</span></h2>
                    <div onClick={handleSignInWithGoogle} className="form-control">
                        <p className="rounded-md py-3 border-2 border-secondary flex justify-center items-center gap-3 cursor-pointer hover:bg-secondary hover:text-white"><FaGoogle /> Sign In With Google</p>
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
                        <button className="btn bg-secondary text-white">Sign In</button>
                    </div>
                    <p>You do not have an account <Link to='/signup' className="text-purple-600 font-bold ">SignUp</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;