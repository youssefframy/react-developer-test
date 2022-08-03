import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryItem from './Category-item';

const Container = styled.div`
  width: 100%;
  padding-bottom: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  

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