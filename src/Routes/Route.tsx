import { useRoutes } from "react-router-dom";
import { Products } from '../components/ProductsItens'
import { Button } from "../components/Button";

export const GeneralRoute = () => {
    return useRoutes([
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <Products /> },
        { path: '/carts/:id', element: <Button /> }
    ])
}