import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../redux/cart/cart-selectors';

const TotalContainer = styled.div`
  border-top: 1px solid #E5E5E5;
  display: grid;
  grid-template-columns: repeat(1);
  padding-top: 1.2rem;
  margin-top: -2.5rem;
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
const OrderButton = styled.button`
  margin-block: 0.6rem;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  border: none;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: #5ECE7B;
  width: 279px;
  height: 43px;
  transition: 1s;

  &:hover{
    color: #4a4848;
    border: 1px solid #5ECE7B;
    background: linear-gradient(to right, #a1ffce, #faffd1);
  }
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
        <OrderButton>ORDER</OrderButton>
      </TotalContainer>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.currencySwitcher.currency,
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CheckoutTotal);