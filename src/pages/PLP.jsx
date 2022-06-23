import React, { Component } from 'react';
import styled  from 'styled-components';
import Categories from '../components/Categories';



const Container = styled.div`
  scrollbar-width: none;
  padding-left: 3vw;
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
        <Categories/>
      </Container>
    )
  }
}

export default PLP;