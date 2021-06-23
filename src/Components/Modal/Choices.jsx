import React from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Style/CheckoutStyle';

export function Choices({ openItem, choice, changeChoice }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <CheckoutStyleWrap>
        {openItem.choices.map((item, i) => (
          <CheckoutStyleLabel key={i}>
            <CheckoutStyleInput type="radio" checked={choice === item} value={item} onChange={changeChoice} />
            {item}
          </CheckoutStyleLabel>
        ))}
      </CheckoutStyleWrap>
    </>
  );
}
