import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "../assets/logo.svg";
import CartIcon from './Cart-icon';

import CartDropdown from './Cart-dropdown';
import { default as CurrencySwitcher} from '../graphQL/Currency-container';

import { toggleCurrencyHidden } from '../redux/currency/currency-action';
import { closeCartOverlay } from '../redux/cart/cart-action';
import { changeCategory } from '../redux/category/category-action';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

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
  padding-left: 3vw;
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

const Label = styled.li`
  display: inline-block;
  border: none;
  font-family: Raleway;
  background: transparent;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    color: #5ECE7B;
  }

  &.active{
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
  }

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1D1F22;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CurrencyMenu = styled.div`
  display: flex;
  position: absolute;
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
    const { cartHidden, currencyHidden, toggleCurrencyHidden, history, currency, closeCartOverlay, changeCategory } = this.props;

    return (
      <HeaderContainer>
        <Wrapper>
          <Left>

          </Left>
        
        <Center>
            <img src={Logo} alt="logo" onClick={() => history.push('/')} />
        </Center>

          <Right >
              <MenuItem>
                <CurrencyMenu onClick={() => {
                  closeCartOverlay();
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
  changeCategory: (category) => dispatch(changeCategory(category)),
  toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden()),
  closeCartOverlay: () => dispatch(closeCartOverlay()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));