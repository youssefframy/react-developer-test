import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutTotal from '../components/Checkout-total';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart-selectors';


const Container = styled.div`
  margin-inline: 3vw;
`
const ItemContainer = styled.div`
  margin-block: 5%;
  border-block: 1px solid #E5E5E5;
`


class CartPage extends Component {
  
  render() {
    const {cartItems, total} = this.props;

    return (
      <Container>
        <h1>CART</h1>
        <ItemContainer>
            
        </ItemContainer>
        <CheckoutTotal total={total}/>
      </Container>
    )
  }
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, total: selectCartTotal})


export default connect(mapStateToProps)(CartPage);