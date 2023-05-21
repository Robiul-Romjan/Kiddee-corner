import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import LogIn from "../pages/Login/LogIn";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blogs from "../pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () => fetch("https://assignment-11-server-sepia.vercel.app/allToys")
            },
            {
                path: "/view-details/:id",
                element: <PrivateRoute>
                    <ViewDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-sepia.vercel.app/allToys/${params.id}`)
            },
            {
                path: "/my-toys",
                element: <PrivateRoute>
                    <MyToy />
                </PrivateRoute>
            },
            {
                path: "/add-toy",
                element: <PrivateRoute>
                    <AddAToy />
                </PrivateRoute>
            },
            {
                path: "/updateToy/:id",
                element: <PrivateRoute>
                    <UpdateToy />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-sepia.vercel.app/allToys/${params.id}`)
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    }
])

export default router;