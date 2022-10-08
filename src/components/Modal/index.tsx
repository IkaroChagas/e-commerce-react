import { useState } from 'react';
import Modal from 'react-modal';
import { useCart } from 'react-use-cart';
import * as C from './styles'
import cartImage from '../../images/cart.png'
import data from '../../data';



export const MainModal = () => {
   
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function handleOpenModal() {
        setModalIsOpen(true);
    }

    function afterOpenModal() {

  const { addItem } = useCart();

  const products = [
    {
       
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

        const {
          isEmpty,
          totalUniqueItems,
          items,
          updateItemQuantity,
          removeItem,
        } = useCart();
      
        if (isEmpty) return <p>Your cart is empty</p>;

    // termina aqui

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    };

    return (
        <C.Container>
            <button onClick={handleOpenModal}><C.img src={cartImage} /></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                
                <button onClick={handleCloseModal}>Close Modal</button>
            </Modal>
        </C.Container>

    );
}


