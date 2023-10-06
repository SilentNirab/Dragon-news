import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import LeftSideNavbar from "../Shared/leftSideNavbar/leftSideNavbar";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4">
                <div>
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="col-span-2">
                    {
                        news.map(anews => <NewsCard key={anews._id}news={anews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;