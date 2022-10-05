import * as C from './styles'
import { productURL } from '../../Api/Api'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slices/productsSlice'


export const Button = ({ productId }: { productId: string }) => {
    const dispatch = useDispatch()


    const handleAddProduct = async (productId: string) => {
        const product = await productURL.getCart(productId)
        dispatch(addProduct(product))
    }

    return (
        <C.Button onClick={() => handleAddProduct(productId)}>Adicionar ao carrinho</C.Button >
    )
}