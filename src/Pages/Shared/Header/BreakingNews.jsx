import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="my-5 flex bg-gray-100 p-4">
            <Link>
            <button className="btn bg-[#D72050] rounded-none text-lg text-white capitalize hover:bg-pink-800">Letest</button>
            </Link>
            <Marquee pauseOnHover={true} speed={100} className="text-black">
                <Link className="mr-5">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className="mr-5">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;