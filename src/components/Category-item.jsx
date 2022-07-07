import React, { Component } from 'react';
import styled from 'styled-components';
import AddCart from "../assets/addCart.svg";

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addProduct } from '../redux/cart/cart-action';

const AddToCart = styled.img`
  position: absolute;
  width: 55px;
  top: 70%;
  right: 5%;
  opacity: 0;
  &:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease;

  }
`

const Image = styled.img`
  width: 356px;
  height: 300px;
  justify-content: center;
  object-fit: cover;
  &:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`
const ProductContainer = styled.div`
  cursor: ${props => props.cursor};
  width: 386px;
  height: 400px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  opacity: ${props => props.inStock};
  position: relative;

  &:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    
    ${AddToCart}{
      opacity: 1;
    }
  }
`
const InStock = styled.div`
  width: 356px;
  height: 300px;
  overflow: hidden;
`
const OutStock = styled.div`
  text-align: center;
  justify-content: center;
  cursor: default;
  p{
    position: absolute;
    color: #8D8F9A;
    left: 25.42%;
    right: 25.71%;
    top: 30%;
    bottom: 43.94%;
    font-weight: 400;
    font-size: 1.5rem;
  }
`

const DescriptionContainer= styled.div`
  width: 356px;

  a{ 
    text-decoration: none;
  }
`

const Description = styled.p`
  text-align: flex-start;
  font-weight: 300px;
  font-size: 18px;
  color: #1D1F22;
`
const Price = styled.p`
  margin-top: -8px;
  text-align: flex-start;
  font-size: 18px;
  font-weight: 600;
`
class CategoryItem extends Component {

  render() {
    const {product, selectedCurrency, addProduct, currencyIndex} = this.props;
        
    return (
      <ProductContainer inStock={product.inStock ? null :"0.5"} cursor={product.inStock ? "pointer" : "default"}>
      { product.inStock 
        ? <InStock> 
          <Link to={`/product/${product.id}`}>
            <Image src={product.gallery[0]} alt={product.name}/> 
          </Link>
          <AddToCart src={AddCart} alt="cart" onClick={() => addProduct(product) }/>
          </InStock>

        : <OutStock> <p>OUT OF STOCK</p><Image src={product.gallery[0]} alt={product.name}/> </OutStock>
      }
          <DescriptionContainer>
            <Link to={`/product/${product.id}`}>
              <Description>{product.brand} {product.name}</Description>
            </Link>
            <Price>{`${selectedCurrency[currencyIndex].currency.symbol} ${selectedCurrency[currencyIndex].amount}`}</Price>
          </DescriptionContainer>
    </ProductContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProduct(product)),
});

const mapStateToProps = (state) => ({
  currencyIndex: state.currencySwitcher.currencyIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);