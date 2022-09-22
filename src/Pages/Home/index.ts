import { productURL } from "../../Api/Api"
import { useState, useEffect } from "react"

export const Home = () => {
    const [load, setLoad] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts
    }, [])


    const loadProducts = async () => {
        setLoad(true)
        const products = await productURL.getProducts()
        setProducts(products)
        setLoad(false)
    }

    return (
            
        )
}


