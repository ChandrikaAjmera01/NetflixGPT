import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
   
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);
   
    return (
        <div className="body">
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}
export default Body;