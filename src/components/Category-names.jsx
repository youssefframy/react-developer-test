import React, { Component } from 'react'
import styled from 'styled-components';

import { Link }from 'react-router-dom';
import { connect } from 'react-redux';

import { changeCategory } from '../redux/category/category-action';
import { closeCartOverlay } from '../redux/cart/cart-action';
import { closeCurrencyOverlay } from '../redux/currency/currency-action';


const Label = styled.p`
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
  color: ${props => props.activeColor};
  border-bottom: 2px solid ${props => props.activeBorder};

  &:hover{
    color: #5ECE7B;
  }

`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1D1F22;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class CategoryNames extends Component {
  render() {
    const { data, changeCategory, title, closeCartOverlay, closeCurrencyOverlay, cartHidden, currencyHidden } = this.props;

    return (
      <div>
        {
            data.map((category) => 
                <StyledLink to={`/listing/${category.name}`}>
                    <Label 
                      activeColor={title === category.name ? "#5ECE7B" : "#1D1F22"}
                      activeBorder={title === category.name ? "#5ECE7B" : "transparent"}
                      onClick={() => {
                        if(cartHidden === false) closeCartOverlay();
                        if(currencyHidden === false) closeCurrencyOverlay();
                        changeCategory(category.name)
                      }}
                    >
                    {category.name}
                    </Label>
                </StyledLink>
            )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
  closeCartOverlay: () => dispatch(closeCartOverlay()),
  closeCurrencyOverlay: () => dispatch(closeCurrencyOverlay()),
});

const mapStateToProps = (state) => ({
  title : state.category.categoryTitle,
  cartHidden: state.cart.hidden,
  currencyHidden: state.currencySwitcher.hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNames);