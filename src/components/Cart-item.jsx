import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Image = styled.img`
  width: 160px;
  height: 235px;
  align-items: center;
  justify-content: right;
  object-fit: cover;
`
const DescriptionContainer = styled.div`
  width: 150px
`

const ValuesContainer = styled.div`
  display: flex;
  margin-top: -1rem;
  align-items: center;
  justify-content: flex-start;
`

const Value = styled.p`
  cursor : pointer;
  padding: 5px;
  border: 1px solid #1D1F22;
  text-align: center;
  justify-content: center;
  margin-right: 8px;
  `
  const ColorSwatch = styled.div`
  cursor : pointer;
  width: 16px;
  height: 16px;
  margin-top: 8px;
  border: 1px solid #1D1F22;
  background: ${props => props.Color};
  margin-right: 8px;
`

const ButtonsContainer = styled.div`
  width: 40px;
  display: grid;
  grid-template-columns: repeat(1);
`
const Button = styled.button`
  cursor : pointer;
  background: transparent;
  border: 1px solid #1D1F22;
  height: 40px;
  font-family: Raleway;
  font-size: 30px;
  `
  
  const Quantity = styled.p`
  cursor : pointer;
  height: 60px;
  padding-top: 4rem;
  text-align: center;
  justify-content: center;
`

class CartItem extends Component {
  render() {
    const {item} = this.props
    console.log(item.attributes[1]);
    return (
      <ItemContainer>
      <DescriptionContainer>
        <p>{item.name}</p>
        <p>{item.prices[0].currency.symbol}{item.prices[0].amount}</p>
        <p>Size: </p>
        <ValuesContainer>
          {item.attributes[0] === undefined
              ? null
              : item.attributes[0].items.map(item => (
                <Value key={item.id}>{item.value}</Value>
              ))
          }
          </ValuesContainer>
          <p>Color: </p>
          <ValuesContainer>
            {item.attributes[1] === undefined
              ? null
              : item.attributes[1].items.map(item => (
                <ColorSwatch key={item.id} Color = {item.value}></ColorSwatch>
              ))
            }
          </ValuesContainer>
        </DescriptionContainer>
        <ButtonsContainer>
            <Button>+</Button>
            <Quantity>{item.quantity}</Quantity>
            <Button>-</Button>
        </ButtonsContainer>
        <Image src={item.gallery[0]}/>
      </ItemContainer>
    )
  }
}



export default CartItem;