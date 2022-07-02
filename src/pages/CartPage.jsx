import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutTotal from '../components/Checkout-total';
import CheckoutItem from '../components/Checkout-item';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart-selectors';

const Container = styled.div`
  margin-inline: 3vw;
`
const ItemContainer = styled.div`
  margin-block: 5%;

`

const EmptyMessage = styled.span`
  font-size: 24px;
  margin: 100px auto;
`



class CartPage extends Component {
  
  render() {
    const {cartItems, total} = this.props;

    return (
      <Container>
        <h1>CART</h1>
        <ItemContainer>
        {
            cartItems.length ?
            cartItems.map(cartItem => (
              <CheckoutItem key={cartItem.id} item={cartItem}/>
            ))
            : <EmptyMessage>Your Cart is Empty</EmptyMessage>
          }
        </ItemContainer>
        <CheckoutTotal total={total}/>
      </Container>
    )
  }
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, total: selectCartTotal})


export default connect(mapStateToProps)(CartPage);