import React, { Component } from 'react';
import styled from 'styled-components';
import CartLogo from "../assets/cart.svg";

import { toggleCartHidden } from '../redux/cart/cart-action';
import { selectCartItemsCount } from '../redux/cart/cart-selectors';
import { connect } from 'react-redux';

const LogoContainer = styled.div`
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

class CartIcon extends Component {

  render() {
    const { toggleCartHidden, itemCount }  = this.props;
    return (
      <LogoContainer onClick={() => toggleCartHidden()}>
        <CartBadge> {itemCount} </CartBadge>
        <img src={CartLogo} alt="cart"/>
      </LogoContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = state => ({ 
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);