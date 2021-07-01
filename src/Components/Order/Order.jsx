import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderTitle, Total, TotalPrice } from '../Style/ModalStyle';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #ffffff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const { auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOrderConfirm },
    openItem: { setOpenItem } } = useContext(Context);
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  const totalCounter = orders.reduce((result, order) => order.count + result, 0);
  const deleteItem = index => setOrders(orders.filter((item, i) => i !== index));
  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ?
          <OrderList>
            {orders.map((order, index) => <OrderListItem
              key={index}
              order={order}
              index={index}
              deleteItem={deleteItem}
              setOpenItem={setOpenItem}
            />)}
          </OrderList> :
          <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      {orders.length ?
        <>
          <Total>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <ButtonCheckout
            onClick={() => {
              if (authentication) {
                setOrderConfirm(true);
              } else {
                logIn();
              }
            }}
          >Оформить</ButtonCheckout>
        </> : ''}
    </OrderStyled>
  );
};
