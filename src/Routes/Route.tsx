import { useRoutes } from "react-router-dom";
import { Products } from '../components/ProductsItens'

export const GeneralRoute = () => {
    return useRoutes([
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <Products /> }
    ])
}