import { productURL } from "../../Api/Api"
import { useState, useEffect } from "react"

export const Home = () => {
    const [load, setLoad] = useState(false)
    const [product, setProduct] = useState([])

    useEffect(() => {
        loadProduct
    }, [])


    const loadProduct = async () => {
        setLoad(true)
        const products = await productURL.getProducts()
        setProduct(products)
        setLoad(false)
    }

    return (
        
    )


}

