import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";

export const GeneralRoute = () => {
    return useRoutes ([
        {path: '/', element: <Home />},
        {path: '/products/:id', element: <Products />}
    ])
}