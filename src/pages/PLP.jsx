import React, { Component } from 'react';
import styled  from 'styled-components';
import {default as Categories} from '../graphQL/Categories-query';


const Container = styled.div`
  margin-inline: 3vw;
`
const Title = styled.div`
  margin-bottom: 12vh;
  font-weight: 400;
  font-size: 42px;
  color: #1D1F22;
`

class PLP extends Component {

  render() {
    return (
      <Container>
        <Title>All</Title>
        <Categories/>
      </Container>
    )
  }
}

export default PLP;