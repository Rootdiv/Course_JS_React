import React from 'react';
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 250px;
  height: 65px;
  cursor: pointer;
  color: #ffffff;
  padding: 20px 80px;
  font-size: 21px;
  border: none;
  background-color: #299B01;
  position: absolute;
  bottom: 50px;
  left: 30%;
  &:focus{
    outline-style: #299B01;
  }
`;

export const Button = () => (
  <ButtonStyle>
    Добавить
  </ButtonStyle>
);
