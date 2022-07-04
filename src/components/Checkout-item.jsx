
import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutAttributes from './Checkout-attributes';

import {addProduct, removeItem} from '../redux/cart/cart-action';
import { connect } from 'react-redux';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1.5rem;
  border-top: 1px solid #E5E5E5;
`

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 288px;
`

const Image = styled.img`
  flex: 2;
  width: 200px;
  height: 288px;
  align-items: center;
  justify-content: right;
  object-fit: cover;
`
const CarouselButtonContainer  = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-right: 4px;
`

const CarouselButton = styled.button`
  cursor: pointer;
  margin-top: -41px;
  margin-right: 8px;
  border: none;
  width: 24px;
  height: 24px;
  font-size: 18px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Raleway;
  color: rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.73);
  transition: 0.5s;
  
  &:hover{
    filter: brightness(105%);
    background: rgba(0, 0, 0, 0.9);
  }
`

const DescriptionContainer = styled.div`
  flex: 8;  
  width: 136px;
  gap: 8px;
  font-size: 30px;
`

const Price = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #1D1F22;
`

const ButtonsContainer = styled.div`
  flex: 1;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 45px;
`
const Button = styled.button`
  cursor : pointer;
  background: transparent;
  border: 1px solid #1D1F22;
  height: 45px;
  width: 45px;
  font-family: Raleway;
  font-size: 30px;
  font-weight: 300;
  box-sizing: border-box;
`
  
const Quantity = styled.div`
  display: flex;
  flex: 2;
  cursor : pointer;
  width: 45px;
  height: 60px;
  align-items:center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`


class CheckoutItem extends Component {
  render() {
    const { item, addItem, removeItem } = this.props;

    return (  
      <ItemContainer>
      <DescriptionContainer>
        <p>{item.name}</p>
        <Price>{item.prices[0].currency.symbol}{item.prices[0].amount}</Price>
        {item.attributes.map(attribute => (
            <CheckoutAttributes key={attribute.id} attribute = {attribute}/>
          ))
        }
        </DescriptionContainer>
        <ButtonsContainer>
            <Button onClick = {() => addItem(item)}>
              ＋
            </Button>
            <Quantity>{item.quantity}
            </Quantity>
            <Button onClick = {() => removeItem(item)}>−</Button>
        </ButtonsContainer>
        <ImageContainer>
          <Image src={item.gallery[0]}/>
          <CarouselButtonContainer>
            <CarouselButton>＜</CarouselButton>
            <CarouselButton>＞</CarouselButton>
          </CarouselButtonContainer>
        </ImageContainer>
      </ItemContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addProduct(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);