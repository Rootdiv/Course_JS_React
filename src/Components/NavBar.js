import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import userImg from '../image/user.svg';


const NavBarStyled = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding 15px;
  background-color: #299B01;
  color: #fff
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

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgUser = styled.img`
  width: 32px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  color: #fff;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <ImgUser src={userImg} alt="user" />
      <Button>Войти</Button>
    </Login>
  </NavBarStyled>
);
