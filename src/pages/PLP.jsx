import React, { Component } from 'react';
import styled  from 'styled-components';
import {default as Categories} from '../graphQL/Categories-container';

import { connect } from 'react-redux';



const Container = styled.div`
  margin-inline: 3vw;
`
const Title = styled.div`
  margin-bottom: 12vh;
  font-weight: 400;
  font-size: 42px;
  color: #1D1F22;
  text-transform: uppercase;
`

class PLP extends Component {
  render() {
    const { title } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        <Categories/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  title: state.category.categoryTitle
});

export default connect(mapStateToProps)(PLP);