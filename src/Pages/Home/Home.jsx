import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import LeftSideNavbar from "../Shared/leftSideNavbar/leftSideNavbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="col-span-2">
                    <h4>This is home</h4>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;