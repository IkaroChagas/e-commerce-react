import { useState, useEffect } from "react";
import { productURL } from "../../Api/Api";
import { useParams, useNavigate } from "react-router-dom";

export const Products = () => {
    const params = useParams()

    const [load, setLoad] = useState(false)
    const [infoID, setInfoID] = useState({ id: 0 })

    useEffect(() => {
        loadProduct(params.id)
    }, [])

    const loadProduct = async (id: string) => {
        setLoad(true)
        const product = await productURL.getProduct(id)
        setInfoID(product)
        setLoad(false)
    }

    return (
        <div>

        </div>
    )
}