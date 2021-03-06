import React, { Component } from 'react';
import styled  from 'styled-components';
import { default as Product } from '../components/Product-container';

import { withRouter } from 'react-router-dom';


const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  margin-top: 190px;
  max-width: 1380px;
  display: flex;
  flex-direction: column;
  margin-left: -5px;
`
class PDP extends Component {
  render() {
    const { history } = this.props;
    const id = history.location.pathname.slice(9);

    return (
      <Container>
        <Product id={id}/>
      </Container>
    )
  }
}

export default withRouter(PDP);