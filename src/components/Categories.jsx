import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
class Categories extends Component {
  render() {
    const { data } = this.props;
     
    return (
      <Container>
        {data.loading 
          ? <h1>Loading...</h1> 
          : data.category.products.map(product => { 
            product.prices = product.prices.filter((price) => { 
              return price.currency.symbol === "$"
            });
            return(
              <CategoryItem key={product.id} selectedCurrency={product.prices} product={product}/>
        )})}
      </Container>
    )
  }
}




export default Categories;