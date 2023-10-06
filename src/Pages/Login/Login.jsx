import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handelLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user.email);

            // naviget after login
            navigate(location?.state ? location.state : "/");
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-10">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100 mx-auto">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered rounded-md" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-3 bg-black rounded-md text-white">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default Login;