import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    position: absolute;
    width: 338px;
    height: 550px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`

const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;    
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    button {
      cursor: pointer;
      gap: 10px;
      width: 140px;
      height: 43px;

      &:focus{
        outline: none;
      }

    }
`

const ViewBagButton = styled.button`
    color: #4a4848;
    transition: 1s;
    border: 1px solid black;

    &:hover{
      color: #ffffff;
      border: 1px solid #5ECE7B;
      background: linear-gradient(to left, #a1ffce, #faffd1);
    }
`

const CheckoutButton = styled.button`
    color: #FFFFFF;
    background: #5ECE7B;
    transition: 1s;
    border: none;

    &:hover{
      color: #4a4848;
      border: 1px solid #5ECE7B;
      background: linear-gradient(to right, #a1ffce, #faffd1);
    }
`

class CartDropdown extends Component {
  render() {
    return (
      <DropdownContainer>
        <CartItems>

        </CartItems>
        <ButtonsContainer>
            <ViewBagButton>VIEW BAG</ViewBagButton>
            <CheckoutButton>CHECK OUT</CheckoutButton>
        </ButtonsContainer>
      </DropdownContainer>
    )
  }
}

export default CartDropdown;