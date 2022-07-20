import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "../assets/logo.svg";
import CartIcon from './Cart-icon';

import CartDropdown from './Cart-dropdown';
import { default as CategoryNames } from '../graphQL/Category-names-container';
import { default as CurrencySwitcher} from '../graphQL/Currency-container';

import { toggleCurrencyHidden } from '../redux/currency/currency-action';
import { closeCartOverlay } from '../redux/cart/cart-action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const HeaderContainer = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  opacity: 1;
  z-index: 20;
  position: fixed;
  display: flex;
  margin-bottom: 300px;
`
const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  max-width: 1380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Left = styled.ul`   
  flex: 2;
  text-align: flex-start;
  padding-left: 2vw;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
`
const Center = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
`
const Right = styled.div`
  display: flex;
  padding-right: 1rem;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding-left: 1rem;
  font-weight: bold;
  cursor: pointer;
`

const CurrencyMenu = styled.div`
  display: flex;
  position: absolute;
  width: 50px;
  margin-right: 10px;

`

const Arrow = styled.span`
  font-size: 30px;
  font-weight: 400;
  margin-top: -20px;
  padding-left: 10px;
`

const Currency = styled.span`
  font-size: 18px;
  font-weight: 400;
`

class Header extends Component {
  render() {
    const { cartHidden, currencyHidden, toggleCurrencyHidden, history, currency, closeCartOverlay } = this.props;

    return (
      <HeaderContainer>
        <Wrapper>
          <Left>
            <CategoryNames/>
          </Left>
        
        <Center>
            <img src={Logo} alt="logo" onClick={() => history.push('/')} />
        </Center>

          <Right >
              <MenuItem>
                <CurrencyMenu onClick={() => {
                  if(cartHidden === false){
                    closeCartOverlay();
                  }
                  toggleCurrencyHidden();
                }}>
                  <Currency>{currency}</Currency>
                  {currencyHidden ? null : <CurrencySwitcher/>}
                  {currencyHidden ? <Arrow>&#751;</Arrow> : <Arrow>&#752;</Arrow>}
                </CurrencyMenu>
              </MenuItem>
              <MenuItem>
                <CartIcon/>
              </MenuItem>
              {cartHidden ? null : <CartDropdown/>}
          </Right>
        </Wrapper>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  cartHidden: state.cart.hidden,
  currencyHidden: state.currencySwitcher.hidden,
  currency: state.currencySwitcher.currency
})

const mapDispatchToProps = (dispatch) => ({
  toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden()),
  closeCartOverlay: () => dispatch(closeCartOverlay()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));