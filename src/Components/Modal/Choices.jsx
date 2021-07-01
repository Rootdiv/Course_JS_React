import React, { useContext } from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Style/CheckoutStyle';
import { ContextItem } from '../Functions/context';

export const Choices = () => {
  const { openItem, choices: { choice, changeChoice } } = useContext(ContextItem);
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
};
