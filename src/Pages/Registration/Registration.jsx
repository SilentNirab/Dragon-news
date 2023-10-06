import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
    const {createUser} =  useContext(AuthContext);

    const handelRegistration = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div>
             <Navbar></Navbar>
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-black text-center">Register your account</h2>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100 mx-auto">
                        <form onSubmit={handelRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo url" name="photo" className="input input-bordered rounded-md" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-3 bg-black rounded-md text-white">Registretion</button>
                            </div>
                        </form>
                        <p className="text-center mb-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default Registration;