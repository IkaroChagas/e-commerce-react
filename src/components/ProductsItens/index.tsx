import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productURL } from '../../Api/Api'
import { Product } from '../../redux/slices/productsSlice'
import { Button } from '../Button'
import * as C from './styles'

export const Products = () => {
    const params = useParams()

    const [load, setLoad] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [infoID, setInfoID] = useState({ id: 0, title: '', price: '', image: '' })

    useEffect(() => {
        loadProducts()
        if (params.id) {
            loadProduct(params.id)
        }
    }, [])

    const loadProducts = async () => {
        setLoad(true)
        const products = await productURL.getProducts()
        setProducts(products)
        setLoad(false)
    }

    const loadProduct = async (id: string) => {
        setLoad(true)
        const product = await productURL.getProduct(id)
        setInfoID(product)
        setLoad(false)
    }

    return (
        <C.Products>

            {load && 'Carregando...'}
            {products.map((item, index) => (
                <>
                    {index.toString}
                    <C.List key={item.id}>
                        <C.Title>{item.title}</C.Title>
                        <C.img src={item.image} />
                        <C.Price>{item.price}</C.Price>
                        <Button productId={item.id} />
                    </C.List>

                </>
            ))}

        </C.Products>
    )
}