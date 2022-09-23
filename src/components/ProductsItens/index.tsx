import { Link } from "react-router-dom";
import * as C from './styles'

type Props = {
    id: number;
    title: string;
    image: string;
}


export const SingleProduct = ({id, title, image}: Props) => {
    return (
        <C.Products>
        <Link to={`/products${id}`}>
            {title}
            {image}
        </Link>
        </C.Products>
    )
}