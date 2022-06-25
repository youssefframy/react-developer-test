import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { PLP_DATA} from '../graphQL/Queries';
import CategoryItem from './Category-item';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
class Categories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: "$",
      cart: []
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
              <CategoryItem key={product.id} selectedCurrency={selectedCurrency} product={product} cart = {this.state.cart}/>
        )})}
      </Container>
    )
  }
}

export default graphql(PLP_DATA)(Categories);