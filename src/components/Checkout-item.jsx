
import React, { Component } from 'react';
import styled from 'styled-components';
import CheckoutAttributes from './Checkout-attributes';


const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1.5rem;
  border-top: 1px solid #E5E5E5;
`

const Image = styled.img`
    flex: 2;
    width: 200px;
    height: 288px;
    align-items: center;
    justify-content: right;
    object-fit: cover;
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
    const { item } = this.props;

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
            <Button>
              ＋
            </Button>
            <Quantity>{item.quantity}
            </Quantity>
            <Button>−</Button>
        </ButtonsContainer>
        <Image src={item.gallery[0]}/>
      </ItemContainer>
    )
  }
}

export default CheckoutItem;