import React, { Component } from 'react';
import styled  from 'styled-components';
import {default as Categories} from '../components/Categories-container';

import { connect } from 'react-redux';
import { closeCartOverlay } from '../redux/cart/cart-action';
import { closeCurrencyOverlay } from '../redux/currency/currency-action';
import { withRouter } from 'react-router-dom';


const Background = styled.div`
  background: ${props => props.BackgroundColor};
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  max-width: 1380px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  height: 40vh;
  margin-left: 2vw;
  font-weight: 400;
  font-size: 42px;
  color: #1D1F22;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

class PLP extends Component {
  render() {
    const { title, cartHidden, currencyHidden, closeCurrencyOverlay, closeCartOverlay, history } = this.props;
    const id = history.location.pathname.slice(9);

    if(cartHidden === false) {
      document.body.style.overflow = "hidden";
    } else if (cartHidden) {
      document.body.style.overflow = "visible";
    }

    return (
      <Background 
        BackgroundColor={cartHidden ? "transparent" : "rgba(57, 55, 72, 0.22)"}
        onClick={() => {
            if(cartHidden === false) closeCartOverlay();
            if(currencyHidden === false) closeCurrencyOverlay();
          }}>
        <Container BackgroundColor={cartHidden ? "transparent" : "rgba(57, 55, 72, 0.22)"}>
          <Title>{title}</Title>
          <Categories id={id}/>
        </Container>
      </Background>
    )
  }
}

const mapStateToProps = state => ({
  title: state.category.categoryTitle,
  cartHidden: state.cart.hidden,
  currencyHidden: state.currencySwitcher.hidden
});

const mapDispatchToProps = dispatch => ({
  closeCartOverlay: () => dispatch(closeCartOverlay()),
  closeCurrencyOverlay: () => dispatch(closeCurrencyOverlay())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PLP));