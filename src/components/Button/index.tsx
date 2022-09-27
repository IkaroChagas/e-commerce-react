import * as C from './styles'
import { productURL } from '../../Api/Api'
import { useEffect, useState } from 'react'
import { ProductsDesc } from '../../types/Products'
import { useDispatch } from 'react-redux'
import { AddCart } from '../../redux/cart'


export const Button = () => {
    const dispatch = useDispatch()

    const [cartItem, setCartItem] = useState<ProductsDesc[]>([])


    useEffect(() => {
        addCart()
    }, [])

    const addCart = async () => {
        const cart = await productURL.getCart()
        setCartItem(cart)
    }

    return (
        <C.Button onClick={() => dispatch(AddCart(cartItem))}>Adicionar ao carrinho</C.Button >
    )
}