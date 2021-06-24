import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Toppings = styled.div`
  font-size: 14px;
  color: #9A9A9A;
  width: 100%;
`;

export const OrderListItem = ({ order, deleteItem, setOpenItem, index }) => {
  const toppings = order.topping.filter(item => item.checked).map(item => item.name).join(', ');
  return (
    <OrderItemStyled onClick={event => (event.target.tagName.toLowerCase() === 'button' ? null :
      setOpenItem({ ...order, index }))
    }>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton onClick={() => deleteItem(order)} />
      {toppings && <Toppings key={order.id}>Допы: {toppings}</Toppings>}
    </OrderItemStyled>
  );
};
