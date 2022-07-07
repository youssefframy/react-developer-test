import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`
class Categories extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container>
        {data.category.products.map(product => { 
            return(
              <CategoryItem key={product.id} selectedCurrency={product.prices} product={product}/>
        )})}
      </Container>
    )
  }
}


export default Categories;