import { productURL } from "../../Api/Api"
import { useState, useEffect } from "react"
import { Products } from "../Products"

export const Home = () => {
    const [load, setLoad] = useState(false)
    const [products, setProducts] = useState([])

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
        <div>
            {load && 'Carregando...'}
            {products.map((item, index) => (
                <Products
                key={index}
                data={item}
                />
            )
            )}
        </div>
    )
}


