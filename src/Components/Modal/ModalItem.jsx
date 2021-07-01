import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { Overlay } from '../Style/ModalStyle';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useTopping } from '../Hooks/useToppings';
import { Choices } from './Choices';
import { useChoices } from '../Hooks/useChoices';
import { Context, ContextItem } from '../Functions/context';

const Modal = styled.div`
  background-color: #ffffff;
  border: 1px solid #008000;
  border-radius: 10px;
  overflow: hidden;
  margin: auto 0;
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

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

export const ModalItem = () => {
  const { orders: { orders, setOrders }, openItem: { openItem, setOpenItem } } = useContext(Context);
  const counter = useCount(openItem);
  const toppings = useTopping(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = event => {
    if (event.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{formatCurrency(openItem.price)}</div>
          </HeaderContent>
          <ContextItem.Provider value={{ counter, toppings, choices, openItem }}>
            <CountItem />
            {openItem.toppings && <Toppings />}
            {openItem.choices && <Choices />}
          </ContextItem.Provider>
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
        </Content>
        <ButtonCheckout
          onClick={isEdit ? editOrder : addToOrder}
          disabled={order.choices && !order.choice}
        >{isEdit ? 'Редактировать' : 'Добавить'}</ButtonCheckout>
      </Modal>
    </Overlay>
  );
};
