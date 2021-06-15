import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Banner = styled.div`
  width: 100%;
  height: 210px;
  background: url('./banner.png') no-repeat;
  background-size: cover;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);
