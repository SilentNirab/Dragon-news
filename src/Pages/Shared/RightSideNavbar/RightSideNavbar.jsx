import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../../assets/images/qzone1.png'
import Qzone2 from '../../../assets/images/qzone2.png'
import Qzone3 from '../../../assets/images/qzone3.png'

const RightSideNavbar = () => {
    return (
        <div className="space-y-4">
            <div className="">
                <h3 className="text-black text-xl font-semibold mb-3">Login With</h3>
                <Link>
                    <button className="flex items-center justify-center border-black border-2  rounded-lg w-full py-3">
                        <FaGoogle className="mr-2"></FaGoogle>
                        Login With Google
                    </button>
                </Link>
                <Link>
                    <button className="flex items-center justify-center border-black border-2  rounded-lg w-full py-3 mt-3">
                        <FaGithub className="mr-2"></FaGithub>
                        Login With Github
                    </button>
                </Link>
            </div>
            <div className="mt-4">
                <h3 className="text-gray-700 text-xl font-semibold mb-3">Find Us</h3>
                <Link>
                    <button className="flex items-center pl-10 border-black border-2  rounded-t-lg w-full py-4">
                        <FaFacebook className="mr-2"></FaFacebook>
                        Facebook
                    </button>
                </Link>
                <Link>
                    <button className="flex items-center pl-10 border-black border-x-2   w-full py-4">
                        <FaTwitter className="mr-2"></FaTwitter>
                        Twitter
                    </button>
                </Link>
                <Link>
                    <button className="flex items-center pl-10 border-black border-2  rounded-b-lg w-full py-4">
                        <FaInstagram className="mr-2"></FaInstagram>
                        Instagram
                    </button>
                </Link>
            </div>
            <div className="mt-4 bg-gray-100 p-4">
                <h3 className="text-gray-700 text-xl font-semibold mb-3">Q-zone</h3>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;