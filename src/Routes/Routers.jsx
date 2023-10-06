import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import News from "../Pages/News/News";
import PrivetRoute from "../Provider/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/news.json')
            },
            {
            path:"/news/:id",
            element: <PrivetRoute><News></News></PrivetRoute>
            },
            {
            path:"/login",
            element: <Login></Login>
            },
            {
            path:"/register",
            element: <Registration></Registration>
            }
       ]
    }
])

export default router;