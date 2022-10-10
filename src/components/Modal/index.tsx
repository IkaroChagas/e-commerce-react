import { useState } from 'react';
import Modal from 'react-modal';
import * as C from './styles'
import cartImage from '../../images/cart.png'


export const MainModal = () => {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);


  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {

  }

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
      >

        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </C.Container>

  );

}




