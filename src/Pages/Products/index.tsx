import { useState, useEffect } from "react";
import { productURL } from "../../Api/Api";
import { useParams, useNavigate } from "react-router-dom";


export const Products = () => {
    const params = useParams()

    const [load, setLoad] = useState(false)
    const [list, setList] = useState([])
    const [infoID, setInfoID] = useState({ id: 0, title: '', price: '', image: '' })


    useEffect(() => {
        if(params.id) {
        loadProduct(params.id)
        }
    }, [])

    const loadProduct = async (id: string) => {
        setLoad(true)
        const product = await productURL.getProduct(id)
        setInfoID(product)
        setLoad(false)
    }

    return (
        <div>
            <h1>{infoID.title}</h1>

            {load && 'Carregando...'}

            {list.map((item, index) => (
                <>
                key={index}
                data={item}
                </>
            ))}

        </div>
    )
}