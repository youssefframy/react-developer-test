import React, { Component } from 'react';
import styled  from 'styled-components';
import Categories from '../components/Categories';

const Container = styled.div`
  margin-inline: 3vw;
`
const Title = styled.h1`
  margin-bottom: 15vh;
`

class PLP extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <Title>Category Name</Title>
        <Categories/>
      </Container>
    )
  }
}

export default PLP;