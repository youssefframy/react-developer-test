import React, { Component } from 'react';
import styled from "styled-components";
import Attributes from './Attributes';

import { addProduct } from '../redux/cart/cart-action';
import { connect } from 'react-redux';


const ProductContainer = styled.div`
  display: flex;
`

const DescriptionContainer = styled.div`
  flex:1;
  margin-left: -5vw;
  width: 292px;
  align-items: center;

  h1{
    font-size: 30px;
    line-height: 2rem;
  }

  h2{
    font-size: 30px;
    font-weight: 400;
    line-height: 27px;
  }
`

const ImageContainer = styled.div`
  flex: 2;
  img{
    width: 610px;
    height: 511px;
    object-fit: contain;
  }
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 511px;
  margin-right: 3rem;

  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`
const Price = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 5px;
  color: #1D1F22;
`
const AddToCart = styled.button`
  margin-block: 3rem;
  cursor: pointer;
  display: flex;
  border: none;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: #5ECE7B;
  width: 292px;
  height: 52px;
  transition: 1s;

  &:hover{
    color: #4a4848;
    border: 1px solid #5ECE7B;
    background: linear-gradient(to right, #a1ffce, #faffd1);
  }
`

class Product extends Component {
  constructor() {
    super();

    this.state = {
      currentImageIndex : 0,
    }
  }


  render() {
    const { product, currencyIndex, addProduct } = this.props; 
    const { currentImageIndex } = this.state;
    
    return (
      <ProductContainer>
          <ImageBox>
            {
              product.gallery.length === 1 ? null
              : product.gallery.map(img =>(
                <img src={img} alt={product.name} key={img}
                onClick={() => {
                  this.setState({currentImageIndex: product.gallery.indexOf(img)})
                }}
                />
              ))
            }
          </ImageBox>
        <ImageContainer>
          <img src={product.gallery[currentImageIndex]} alt={product.name}/>
        </ImageContainer>
        <DescriptionContainer>
          <h1>{product.brand}</h1>
          <h2>{product.name}</h2>
          {product.attributes.map(attribute => (
            <Attributes key={attribute.id} attribute={attribute}/>
            ))
          }
          <h3>PRICE:</h3>
          <Price>{product.prices[currencyIndex].currency.symbol}{product.prices[currencyIndex].amount}</Price>
          <AddToCart onClick={() => addProduct(product)}>ADD TO CART</AddToCart>
          <span dangerouslySetInnerHTML={{ __html: product.description}}/>
        </DescriptionContainer>
      </ProductContainer>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProduct(product))
});

const mapStateToProps = (state) => ({
  currencyIndex: state.currencySwitcher.currencyIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
