
import React, { Component } from 'react';
import styled from 'styled-components';
import CartAttributes from './Cart-item-attributes';

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
  object-fit: contain;
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
  transition: 0.2s;
  
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
  width: 45px;
  height: 60px;
  align-items:center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
`

class CheckoutItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      index: 0,
    }
  }

  render() {
    const { item, addItem, removeItem, currencyIndex } = this.props;
    const selectedAttributes = item.selectedAttributes;

    const ImageSlider = (newIndex, sign) => {
      if (sign === '+') this.setState({ index: this.state.index + 1});
      if (sign === '-') this.setState({ index: this.state.index - 1});
      if(newIndex < 0) this.setState({index: item.gallery.length - 1});
      if (newIndex >= item.gallery.length) this.setState({ index: 0 });
    }

    return (  
      <ItemContainer>
      <DescriptionContainer>
        <p>{item.brand} {item.name}</p>
        <Price>{item.prices[currencyIndex].currency.symbol}{item.prices[currencyIndex].amount}</Price>
          {item.attributes.map(attribute => (
              <CartAttributes key={attribute.id} attribute = {attribute} selectedAttributes={selectedAttributes}/>
            ))
          }
        </DescriptionContainer>
        <ButtonsContainer>
            <Button onClick = {() => addItem(item, selectedAttributes, item.id)}>
              ＋
            </Button>
            <Quantity>{item.quantity}
            </Quantity>
            <Button onClick = {() => removeItem(item)}>−</Button>
        </ButtonsContainer>
        <ImageContainer>
          <Image src={item.gallery[this.state.index]}/>
          {item.gallery.length === 1 
          ? null 
          : <CarouselButtonContainer>
            <CarouselButton onClick = {() => {
              const newIndex = this.state.index - 1;
              ImageSlider(newIndex, '-')
            }}>
              ＜
            </CarouselButton>
            <CarouselButton onClick = {() => {
              const newIndex = this.state.index + 1;
              ImageSlider(newIndex, '+')
              }}>
              ＞
            </CarouselButton>
          </CarouselButtonContainer>
        } 
        </ImageContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);