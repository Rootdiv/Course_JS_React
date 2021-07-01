import React, { useContext } from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Style/CheckoutStyle';
import { ContextItem } from '../Functions/context';

export const Toppings = () => {
  const { toppings: { toppings, checkToppings } } = useContext(ContextItem);
  return (
    <>
      <h3>Добавки</h3>
      <CheckoutStyleWrap>
        {toppings.map((item, i) => (
          <CheckoutStyleLabel key={i}>
            <CheckoutStyleInput type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            {item.name}
          </CheckoutStyleLabel>
        ))}
      </CheckoutStyleWrap>
    </>
  );
};
