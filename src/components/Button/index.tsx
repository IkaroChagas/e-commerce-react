import * as C from './styles'
import { productURL } from '../../Api/Api'
import {useEffect, useState} from 'react'
import { ProductsDesc } from '../../types/Products'

export const Button = () => {
    const [cartItem, setCartItem] = useState<ProductsDesc[]>([])


    useEffect( () => {
        addCart()
    }, [])

    const addCart = async () => {
        const cart = await productURL.getCart()
        setCartItem(cart)
    }
    

    const handleAddtoCart = () => {
        
    }

    return (
        <C.Button onClick={handleAddtoCart}>Adicionar ao carrinho</C.Button>
    )
}