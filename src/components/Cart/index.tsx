import { useCart } from 'react-use-cart';
import { Product } from '../../redux/slices/productsSlice';
import { useState } from 'react';


export const Cart = () => {

    const [products, setProducts] = useState<Product[]>([])

    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();


    if (isEmpty) return <h1>Carrinho vazio</h1>;

    return (
        <div>
            <div>
                <h5>Carrinho =({totalUniqueItems})</h5>
                <h6>Itens totais={totalItems}</h6>

                <body>
                    {products.map((item, index) => {

                        return (
                            <tr key={index}>
                                <td>
                                    <img alt="" src={item.image} height="80px" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantidade ({item.quantity})</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, - 1)
                                        }>
                                        -
                                    </button>
                                    <button
                                        onClick={() => {
                                            updateItemQuantity(item.id, + 1);
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            removeItem(item.id);
                                        }}
                                    >
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </body>

            </div>
            <h1>Total: {cartTotal}</h1>
        </div>

    );
}
