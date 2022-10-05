import * as C from './styles'
import { productURL } from '../../Api/Api'
import { useEffect, useState } from 'react'
import { ProductsDesc } from '../../types/Products'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../redux/cart'
import cartState from '../../redux/cart'
import { useParams } from 'react-router-dom'

export const Button = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const [cartItem, setCartItem] = useState<ProductsDesc[]>([])


    useEffect(() => {
        if (params.id) {
            addCart(params.id)
        }
    }, [])

    const addCart = async (id: string) => {
        const cart = await productURL.getCart(id)
        setCartItem(cart)
    }

    return (
        <C.Button onClick={() => dispatch(AddCart(cartState))}>Adicionar ao carrinho</C.Button >
    )
}