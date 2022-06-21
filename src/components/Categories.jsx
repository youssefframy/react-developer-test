import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { PLP_DATA } from '../graphQL/Queries';

const Container = styled.div`
    
`


class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const data = this.props.data;
    console.log(data.category)
    return (
      <Container>
        <h1>Category Name</h1>
        {data.loading 
          ? <h1>Loading...</h1> 
          : data.category.products.map(product => { 
            return(
            <div key={product.id}>
              <img src={product.gallery[0]} alt={product.name}/>
              <p>{product.name}</p>
            </div>
        )})}
      </Container>
    )
  }
}

export default graphql(PLP_DATA)(Categories);