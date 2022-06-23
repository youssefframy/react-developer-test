import React, { Component } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    position: absolute;
    width: 325px;
    height: 670px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
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
`

const ViewBagButton = styled.button`
    cursor: pointer;
    gap: 10px;
    width: 140px;
    height: 43px;
    align-items: center;
`

const CheckoutButton = styled.button`
    cursor: pointer;
    gap: 10px;
    width: 140px;
    height: 43px;
    color: #FFFFFF;
    background: #5ECE7B;
    border: 1px solid black;

    &:hover{
        
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