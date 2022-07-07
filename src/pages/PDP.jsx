import React, { Component } from 'react';
import styled  from 'styled-components';
import { default as Product } from '../graphQL/Product-container';

import { withRouter } from 'react-router-dom';


const Container = styled.div`
  margin-inline: 3vw;
`
class PDP extends Component {
  render() {
    const { history } = this.props;
    let id = history.location.pathname.slice(9);

    return (
      <Container>
        <Product id={id}/>
      </Container>
    )
  }
}

export default withRouter(PDP);