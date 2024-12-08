import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
    ...PublicRoute,
    ...AuthRoute,
])

export default router;