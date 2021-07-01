import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Style/ModalStyle';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin: auto 0;
  padding: 30px;
  width: 600px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  itemName: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => (arr.length ? arr : 'no topping')],
  choice: ['choice', item => (item ? item : 'no choice')],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
};

export const OrderConfirm = () => {
  const { auth: { authentication },
    orders: { orders, setOrders },
    orderConfirm: { setOrderConfirm },
    firebaseDatabase
  } = useContext(Context);

  const closeModal = event => {
    if (event.target.id === 'confirm') {
      setOrderConfirm(false);
    }
  };

  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  return (
    <Overlay id="confirm" onClick={closeModal}>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        {orders.length ?
          <>
            <Text>Осталось только подтвердить ваш заказ</Text>
            <Total>
              <span>Итого</span>
              <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout
              onClick={() => {
                sendOrder(dataBase, orders, authentication);
                setOrders([]);
              }}>Подтвердить</ButtonCheckout>
          </> :
          <>
            <Text>Спасибо за заказ!</Text>
            <ButtonCheckout onClick={() => setOrderConfirm(false)}>
              Спасибо
            </ButtonCheckout>

          </>
        }
      </Modal>
    </Overlay>
  );
};
