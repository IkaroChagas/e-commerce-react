import * as C from './styles'
import { productURL } from '../../Api/Api'
import { useEffect, useState } from 'react'
import { ProductsDesc } from '../../types/Products'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/productsSlice'
// import { useParams } from 'react-router-dom'

export const Button = ({ productId }: { productId: string }) => {
    const dispatch = useDispatch()
    // const params = useParams()

    // const [cartItem, setCartItem] = useState<ProductsDesc[]>([])

    // useEffect(() => {
    //     if (params.id) {
    //         handleAddProduct(params.id)
    //     }
    // }, [])

    const handleAddProduct = async (productId: string) => {
        const product = await productURL.getCart(productId)
        dispatch(addProduct(product))
    }

    return (
        <C.Button onClick={() => handleAddProduct(productId)}>Adicionar ao carrinho</C.Button >
    )
}