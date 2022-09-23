import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";

export const GeneralRoute = () => {
    return useRoutes ([
        {path: '/products', element: <Home />},
        {path: '/products/:id', element: <Products />}
    ])
}