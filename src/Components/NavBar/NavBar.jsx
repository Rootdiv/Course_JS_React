import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  z-index: 100;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #299B01;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  color: #ffffff;
  border: none;
  background: transparent;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="лого" />
      <H1>MrDonald&apos;s</H1>
    </Logo>
    <Login>
      <img src={signImg} alt="войти" />
      <p>Войти</p>
    </Login>
  </NavBarStyled>
);
