import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);    
  justify-items: center;
  align-items: center;
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