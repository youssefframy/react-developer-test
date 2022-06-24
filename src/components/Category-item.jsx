import React, { Component } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  cursor: pointer;
  width: 386px;
  height: 400px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  opacity: ${props => props.inStock};
  
  &:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`
const InStock = styled.div`
  width: 356px;
  height: 300px;
  overflow: hidden;
`
const OutStock = styled.div`
  text-align: center;
  justify-content: center;

  p{
    position: absolute;
    color: #8D8F9A;
    left: 25.42%;
    right: 25.71%;
    top: 30%;
    bottom: 43.94%;
    font-weight: 400;
    font-size: 1.5rem;
  }
`

const Image = styled.img`
  width: 356px;
  height: 300px;
  justify-content: center;
  object-fit: cover;
`

const DescriptionContainer= styled.div`
  width: 356px;
`

const Description = styled.p`
  text-align: flex-start;
  font-weight: 300px;
  font-size: 18px;
  color: #1D1F22;
`
const Price = styled.p`
  margin-top: -8px;
  text-align: flex-start;
  font-size: 18px;
  font-weight: 600;
`
class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const product = this.props.product;
    const currency = this.props.selectedCurrency;

    return (
      <ProductContainer inStock={product.inStock ? null :"0.4"}>
      { product.inStock 
        ? <InStock> <Image src={product.gallery[0]} alt={product.name}/> </InStock>
        : <OutStock> <p>OUT OF STOCK</p><Image src={product.gallery[0]} alt={product.name}/> </OutStock>
      }
          <DescriptionContainer>
            <Description>{product.name}</Description>
            <Price>{`${currency[0].currency.symbol} ${currency[0].amount}`}</Price>
          </DescriptionContainer>
    </ProductContainer>
    )
  }
}

export default CategoryItem;