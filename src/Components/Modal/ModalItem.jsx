import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';

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

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 310px);
  padding: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: normal;
  font-family: Pacifico;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = event => {
    if (event.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem
  };

  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</div>
          </HeaderContent>
        </Content>
        <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
      </Modal>
    </Overlay>
  )
};
