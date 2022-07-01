import React, { Component } from 'react';
import styled from 'styled-components';

import CartItem from './Cart-item';
import { connect } from 'react-redux';

const DropdownContainer = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`

const CartItemsContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow: auto;    
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    button {
      font-family: Raleway;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
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
      color: #383838;
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
    const { cartItems } = this.props.cartItems;

    return (
      <DropdownContainer>
        <CartItemsContainer>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          ))}
        </CartItemsContainer>
        <ButtonsContainer>
            <ViewBagButton>VIEW BAG</ViewBagButton>
            <CheckoutButton>CHECK OUT</CheckoutButton>
        </ButtonsContainer>
      </DropdownContainer>
    )
  }
}

const mapStateToProps = ({ cart : cartItems}) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);