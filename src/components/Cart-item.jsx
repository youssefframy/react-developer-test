import React, { Component } from 'react';
import styled from 'styled-components';
import CartAttributes from './Cart-item-attributes';

import {addProduct, removeItem} from '../redux/cart/cart-action';
import { connect } from 'react-redux';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #1D1F22;
`

const Image = styled.img`
  width: 150px;
  height: 190px;
  align-items: center;
  justify-content: right;
  object-fit: contain;
`
const DescriptionContainer = styled.div`
  width: 136px;
  gap: 8px;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 24px;
`
const Button = styled.button`
  display: flex;
  cursor : pointer;
  background: transparent;
  border: 1px solid #1D1F22;
  height: 24px;
  width: 24px;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 300;
  justify-content: center;
  box-sizing: border-box;
  transition: 0.2s;

  &:hover{
    color: white;
    background: rgba(0, 0, 0, 0.9);
}
`
  
const Quantity = styled.div`
  display: flex;
  flex: 2;
  cursor : pointer;
  width: 24px;
  height: 60px;
  align-items:center;
  justify-content: center;
`
  const Amount = styled.div`

`

class CartItem extends Component {
  render() {
    const { item, addItem, removeItem, currencyIndex } = this.props;
    const selectedAttributes = item.selectedAttributes;

    return (
      <ItemContainer>
      <DescriptionContainer>
        <p>{item.brand} {item.name}</p>
        <Price>{item.prices[currencyIndex].currency.symbol}{item.prices[currencyIndex].amount}</Price>
        {item.attributes.map(attribute => (
            <CartAttributes key={item.id} attribute={attribute} selectedAttributes={selectedAttributes}/>
          ))
        }
        </DescriptionContainer>
        <ButtonsContainer>
            <Button onClick = {() => addItem(item ,selectedAttributes, item.id)}>
              ＋
            </Button>
            <Quantity>
              <Amount>{item.quantity}</Amount>
            </Quantity>
            <Button onClick = {() => removeItem(item)}>-</Button>
        </ButtonsContainer>
        <Image src={item.gallery[0]}/>
      </ItemContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (item, selectedAttributes) => dispatch(addProduct(item, selectedAttributes, item.id)),
  removeItem: item => dispatch(removeItem(item))
});

const mapStateToProps = (state) => ({
  currencyIndex: state.currencySwitcher.currencyIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);