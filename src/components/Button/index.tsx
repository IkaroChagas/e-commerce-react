import * as C from './styles'
import { productURL } from '../../Api/Api'
import { useEffect, useState } from 'react'
import { ProductsDesc } from '../../types/Products'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../redux/cart'
import { useParams } from 'react-router-dom'


export const Button = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const [cartItem, setCartItem] = useState<ProductsDesc[]>([])
    const [updatecart, setUpdateCart] = useState([])

    useEffect(() => {
        if (params.id) {
            addCart(params.id)
        }
    }, [cartItem])

    const addCart = async (id: string) => {
        const cart = await productURL.getCart(id)
        setCartItem(cart)
    }

    return (
        <C.Button onClick={() => dispatch(AddCart(addCart))}>Adicionar ao carrinho</C.Button >
    )
}