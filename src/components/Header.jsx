import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.svg";
import CartLogo from "../assets/cart.svg";

const Container = styled.div`
  height: 10vh;
`
const Wrapper = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
`
/* Nav Bar Partition */
const Left = styled.div`   
  flex: 1;
  text-align: center;
  align-items: center;
  padding-left: 3rem;
`
const Center = styled.div`
  flex: 2;
  padding-top: 1rem;
  text-align: center;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
  align-items: center;
  justify-content: flex-end;
`

const Label = styled.label`
  padding: 5px;
  color: #5ECE7B;
  font-weight: 600px;
  padding-right: 2rem;
  text-align: center;
  cursor: pointer;
`
const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding-left: 1rem;
  font-weight: bold;
  cursor: pointer;
`

const CartBadge = styled.div`
  position: absolute;
  font-size: 0.7rem;
  font-weight: normal;
  top: -9px;
  right: -7px;
  color: #FFFFFF;
  width: 1rem;
  height: 1rem;
  background-color: #1D1F22;
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
              <Label>ALL</Label>
              <Label>TECH</Label>
              <Label>CLOTHES</Label>
          </Left>
        
        <Center>
          <img src={Logo} alt="logo"/>
        </Center>

          <Right >
              <MenuItem>$</MenuItem>
              <MenuItem>
                <CartBadge>2</CartBadge>
                <img src={CartLogo} alt="cart"/>
              </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    )
  }
}

export default Header;