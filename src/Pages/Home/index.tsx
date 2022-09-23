import { productURL } from "../../Api/Api"
import { useState, useEffect } from "react"
import { ProductsDesc  } from "../../types/Products"
import { SingleProduct } from "../../components/ProductsItens"
import * as C from './styles'

export const Home = () => {
    const [load, setLoad] = useState<boolean>(false)
    const [products, setProducts] = useState<ProductsDesc[]>([])

    useEffect(() => {
        loadProducts()
    }, [])


    const loadProducts = async () => {
        setLoad(true)
        const products = await productURL.getProducts()
        setProducts(products)
        setLoad(false)
    }

    return (
        <C.Container>
            <h1>Lista de produtos</h1>
            {load && 'Carregando...'}
            {products.map((item, index) => (
                <SingleProduct 
                    key={index}
                    id={item.id} 
                    title={item.title}
                    image={item.image}/>
            ))}

        </C.Container>
    )
}


