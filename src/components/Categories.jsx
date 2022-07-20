import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
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