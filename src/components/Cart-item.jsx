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
  object-fit: cover;
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
    const { item, addItem, removeItem } = this.props;

    return (
      
      <ItemContainer>
      <DescriptionContainer>
        <p>{item.brand} {item.name}</p>
        <Price>{item.prices[0].currency.symbol}{item.prices[0].amount}</Price>
        {item.attributes.map(attribute => (
            <CartAttributes key={attribute.id} attribute = {attribute}/>
          ))
        }
        </DescriptionContainer>
        <ButtonsContainer>
            <Button onClick = {() => addItem(item)}>
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
  addItem: item => dispatch(addProduct(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);