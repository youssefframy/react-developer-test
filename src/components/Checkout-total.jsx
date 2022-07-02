import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../redux/cart/cart-selectors';

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1);
`
const PriceContainer = styled.div`
  display: flex;
  padding-block: 5px;
`

const Label = styled.div`
  padding-right: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: right;
`
const Price = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: right;
`

class CheckoutTotal extends Component {
  render() {
    const { currency, total, itemCount } = this.props;
    const taxes = total*0.21

    return (
      <TotalContainer>
        <PriceContainer>
            <Label>Tax 21%:</Label>
            <Price>{currency}{taxes.toFixed(2)}</Price>
        </PriceContainer>
        <PriceContainer>
            <Label>Quantity: </Label>
            <Price>{itemCount}</Price>
        </PriceContainer>
        <PriceContainer>
            <Label>Total: </Label>
            <Price>{currency}{(total + taxes).toFixed(2)}</Price>
        </PriceContainer>
      </TotalContainer>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.currencySwitcher.currency,
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CheckoutTotal);