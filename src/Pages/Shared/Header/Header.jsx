import moment from "moment/moment";
import Logo from "../../../assets/images/logo.png"

const Header = () => {
    return (
        <div className="text-center my-5">
            <img className="mx-auto" src={Logo} alt="Logo" />
            <p className="text-gray-400">Journalism Without Fear or Favour</p>
            <p className='text-md font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;