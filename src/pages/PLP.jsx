import React, { Component } from 'react';
import styled  from 'styled-components';
import Categories from '../components/Categories';

const Container = styled.div`
  padding-left: 3vw;
`

class PLP extends Component {
  render() {
    return (
      <Container>
        <Categories/>
      </Container>
    )
  }
}

export default PLP;