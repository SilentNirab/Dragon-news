import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    
    return (
        <div>
            <h3 className="text-gray-700 text-xl font-semibold mb-3">All Category</h3>
           <div className="space-y-4">
            <h3 className="text-black bg-gray-300 text-xl font-semibold mb-3 px-10 py-4">National News</h3>
           {
                categories.map(category => <Link
                     key={category.id} 
                     className="block pl-10 text-lg font-medium text-gray-400">
                    {category.name}</Link>)
            }
           </div>
        </div>
    );
};

export default LeftSideNavbar;