import React, { Component } from 'react';
import styled  from 'styled-components';
import { default as Product } from '../graphQL/Product-container';


const Container = styled.div`
  margin-inline: 3vw;
`
class PDP extends Component {
  render() {
    return (
      <Container>
        <Product/>
      </Container>
    )
  }
}

export default PDP;