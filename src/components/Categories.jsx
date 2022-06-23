import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { PLP_DATA , CURRENCY_DATA} from '../graphQL/Queries';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    img{
      width: 365px;
      height: auto;
    }
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
            console.log(selectedCurrency)
            return(
            <div key={product.id}>
              <img src={product.gallery[0]} alt={product.name}/>
              <p>{product.name}</p>
              <p>{`${selectedCurrency[0].amount} ${selectedCurrency[0].currency.symbol}`}</p>
            </div>
        )})}
      </Container>
    )
  }
}

export default graphql(PLP_DATA, CURRENCY_DATA)(Categories);