import React, { Component } from 'react';
import styled from "styled-components";
import parse from "html-react-parser";
import Attributes from './Product-attribute';

import { addProduct } from '../redux/cart/cart-action';
import { connect } from 'react-redux';

import { closeCartOverlay } from '../redux/cart/cart-action';
import { closeCurrencyOverlay } from '../redux/currency/currency-action';

const ProductContainer = styled.div`
  max-width: 1380px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  width: 95%;
  height: 100%;
  padding-block: 80px;
  margin-top: -130px;
  margin-left: 3vw;  
`

const DescriptionContainer = styled.div`

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

  img{
    width: 610px;
    height: 511px;
    object-fit: contain;
  }
`

const ImageBox = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  height: 511px;
  width: 100px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.18rem;
  }

  ::-webkit-scrollbar-track{
  background: #e6e6e6;
  border-radius: 100vw;
  margin-block: .5rem;
  }

  ::-webkit-scrollbar-thumb{
  background: linear-gradient(to top, #56bb71, #5ECE7B, #e6e6e6,#FFFFFF);
  border-radius: 100vw;
  }
  
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

const OutStock = styled.div`
  cursor: default;
  opacity: 0.5;

  p{
    position: absolute;
    color: #8D8F9A;
    left: 25.42%;
    right: 25.71%;
    top: 45%;
    bottom: 43.94%;
    font-weight: 400;
    font-size: 1.5rem;
  }
`
const Warning = styled.p`
  color: #D0342C;
  padding-top: 10px;
`

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: [{
        name: '',
        value: ''
      }],
      attributeIndex: 0,
      currentImageIndex : 0,
      selectedAllAttributes: true,
    }
    this.updateAttributes = this.updateAttributes.bind(this);
  }

  updateAttributes(props) {
    const addedAttr = this.state.attributes.find(
      (item) => item.name === props.name
    );

    let attributes = [...this.state.attributes];
    let index = attributes.findIndex((attr) => attr.name === props.name);
    this.setState({attributeIndex: index})
    attributes[index] = {
      ...attributes[index],
      value: props.value,
    };

    addedAttr
      ? this.setState({ attributes })
      : this.setState((prevState) => ({
          attributes: [...prevState.attributes, props],
        }));
  }
  
  render() {
    const { product, currencyIndex, addProduct, cartHidden, currencyHidden, closeCurrencyOverlay, closeCartOverlay } = this.props; 
    const { currentImageIndex, attributes, attributeIndex, selectedAllAttributes } = this.state;
    const arrayId = attributes.map((attr) => attr.name + attr.value);
    const sortedArray = arrayId.sort().toString();
    const newProductId = product.id + sortedArray;

    console.log(attributes)
    console.log(newProductId);

    return (
      <ProductContainer onClick={() => {
        if(cartHidden === false) return closeCartOverlay();
        if(currencyHidden === false) return closeCurrencyOverlay();
      }}>
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
          {
            product.inStock 
            ? <img src={product.gallery[currentImageIndex]} alt={product.name}/>
            : <OutStock> <p>OUT OF STOCK</p> <img src={product.gallery[currentImageIndex]} alt=""/> </OutStock>
          }
        </ImageContainer>
        <DescriptionContainer>
          <h1>{product.brand}</h1>
          <h2>{product.name}</h2>
          {product.attributes.map(attribute => (
            <Attributes key={attribute.id} attribute={attribute} attributeState={attributes} updateSelectedOptions={this.updateAttributes} attributeIndex = {attributeIndex}/>
            ))
          }
          <h3>PRICE:</h3>
          <Price>{product.prices[currencyIndex].currency.symbol}{product.prices[currencyIndex].amount}</Price>
          {selectedAllAttributes ? null : <Warning>* Please Select All Attributes.</Warning>}
          {product.inStock 
            ?<AddToCart onClick={() => {
              if(attributes.length === 1){
                this.setState({ selectedAllAttributes: false })
              } else if (attributes.length === product.attributes.length + 1) {
                this.setState({ selectedAllAttributes: true });
                addProduct(product, attributes, newProductId);
              }
            }}>
              ADD TO CART</AddToCart>
            :<AddToCart>OUT OF STOCK</AddToCart>
          }
          <span>{parse(product.description)}</span>
        </DescriptionContainer>
      </ProductContainer>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product, attributes, newProductId) => dispatch(addProduct(product, attributes, newProductId)),
  closeCartOverlay: () => dispatch(closeCartOverlay()),
  closeCurrencyOverlay: () => dispatch(closeCurrencyOverlay())
});

const mapStateToProps = (state) => ({
  currencyIndex: state.currencySwitcher.currencyIndex,
  currencyHidden: state.currencySwitcher.hidden,
  currency: state.currencySwitcher.currency,
  cartHidden: state.cart.hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
