import { Link, NavLink } from "react-router-dom";
import DefaultUserImg from "../../../assets/images/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handelSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const Navlinks = <>
        <li><NavLink className="bg-none" to={'/'}>Home</NavLink></li>
        <li><NavLink className="bg-none" to={'/about'}>About</NavLink></li>
        <li><NavLink className="bg-none" to={'/career'}>Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {Navlinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-10" src={DefaultUserImg} alt="User Images" />
                    {
                        user ? 
                        <button onClick={handelSignOut} className="btn bg-[#403F3F] hover:bg-[#313030] rounded-none px-4 ml-4 text-white">Sign Out</button>
                        :
                        <Link to={'/login'}>
                        <button className="btn bg-[#403F3F] hover:bg-[#313030] rounded-none px-4 ml-4 text-white">Login</button>
                    </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;