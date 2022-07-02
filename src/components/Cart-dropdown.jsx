import React, { Component } from 'react';
import styled from 'styled-components';

import CartItem from './Cart-item';

import { selectCartItems, selectCartItemsCount } from '../redux/cart/cart-selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartTotal } from '../redux/cart/cart-selectors';
import { toggleCartHidden } from '../redux/cart/cart-action';




const DropdownContainer = styled.div`
    position: absolute;
    width: 380px;
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

const TitleContainer = styled.div`
  margin-block: 1rem;
`

const BagTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #1D1F22;
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

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: auto;
`

const Label = styled.div`
  padding-right: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`
const Price = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

`

const EmptyMessage = styled.span`
  font-size: 24px;
  margin: 100px auto;
`

class CartDropdown extends Component {
  render() {
    const { cartItems, total, currency, quantity, dispatch, history } = this.props;
    
    return (
      <DropdownContainer>
        <TitleContainer>
          <BagTitle>My Bag, </BagTitle>
          <span>{quantity} items</span>
        </TitleContainer>
        <CartItemsContainer>
          {
            cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem}/>
            ))
            : <EmptyMessage>Your Cart is Empty</EmptyMessage>
          }
        </CartItemsContainer>
        <Total>
          <Label>Total </Label>
          <Price>{currency}{total.toFixed(2)}</Price>
        </Total>
        <ButtonsContainer>
            <ViewBagButton onClick = {() => {
              history.push('/cart');
              dispatch(toggleCartHidden())
              }}>
              VIEW BAG
              </ViewBagButton>
            <CheckoutButton onClick = {() => {
              history.push('/cart')
              
              }}>
              CHECK OUT
              </CheckoutButton>
        </ButtonsContainer>
      </DropdownContainer>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
  quantity: selectCartItemsCount(state),
  currency: state.currencySwitcher.currency
});

export default withRouter(connect(mapStateToProps)(CartDropdown));