import React, { Component } from 'react';
import styled  from 'styled-components';
import {default as Categories} from '../graphQL/Categories-container';

import { connect } from 'react-redux';
import { closeCartOverlay } from '../redux/cart/cart-action';
import { withRouter } from 'react-router-dom';


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  margin-top: 120px;
  max-width: 1380px;
  display: flex;
  flex-direction: column;
  background: ${props => props.BackgroundColor};
  position: ${props => props.scroll};
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
    const { title, cartHidden, closeCartOverlay, history } = this.props;
    const id = history.location.pathname.slice(9);

    return (
      <Container 
        BackgroundColor={cartHidden ? "transparent" : "rgba(57, 55, 72, 0.22)"}
        scroll={cartHidden ? "relative": "fixed"}
        onClick={() => cartHidden ? null : closeCartOverlay()}
      >
        <Title>{title}</Title>
        <Categories id={id}/>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  title: state.category.categoryTitle,
  cartHidden: state.cart.hidden
});

const mapDispatchToProps = dispatch => ({
  closeCartOverlay: () => dispatch(closeCartOverlay()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PLP));