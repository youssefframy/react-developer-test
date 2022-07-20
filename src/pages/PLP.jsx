import React, { Component } from 'react';
import styled  from 'styled-components';
import {default as Categories} from '../graphQL/Categories-container';

import { connect } from 'react-redux';



const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  margin-top: 160px;
  max-width: 1380px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  margin-left: 3vw;
  margin-bottom: 10vh;
  font-weight: 400;
  font-size: 42px;
  position: relative;
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