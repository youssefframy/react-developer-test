import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { PLP_DATA , CURRENCY_DATA} from '../graphQL/Queries';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

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

  &:hover{
    transform: scale(1.03);
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`
const ImageContainer = styled.div`
  width: 356px;
  height: 300px;
  overflow: hidden;
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
`

class Categories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: "$"
    }
  }

  render() {
    const data = this.props.data;

    return (
      <Container>
        {data.loading 
          ? <h1>Loading...</h1> 
          : data.category.products.map(product => { 
            const selectedCurrency = product.prices.filter((price) => { 
              return price.currency.symbol === "$"
            });
            return(
            <ProductContainer key={product.id}>
              <ImageContainer>
                <Image src={product.gallery[0]} alt={product.name}/>
              </ImageContainer>

              <DescriptionContainer>
                <Description>{product.name}</Description>
                <Description>{`${selectedCurrency[0].currency.symbol} ${selectedCurrency[0].amount}`}</Description>
              </DescriptionContainer>
                
            </ProductContainer>
        )})}
      </Container>
    )
  }
}

export default graphql(PLP_DATA, CURRENCY_DATA)(Categories);