import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path:'/news',
        element: <h1>News layout</h1>
    },
    {
        path:'auth',
        element: <h1>Log in</h1>
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])

export default router;