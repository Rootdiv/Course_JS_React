import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #ffffff;
  margin-top: 100px;
  width: 600px;
  height: 600px;
  position: relative;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 20px;
  h2 {
    font-weight: normal;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  const closeModal = (event) => {
    if (event.target.id === 'overlay') {
      setOpenItem(null);
    }
  }
  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ProductItem>
          <h2>{openItem.name}</h2>
          <h2>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</h2>
        </ProductItem>
        <Button />
      </Modal>
    </Overlay>
  )
};
