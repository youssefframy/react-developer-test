import React, { Component } from 'react';
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
`

const DescriptionContainer = styled.div`
  flex: 1;
`

const ImageContainer = styled.div`
  flex:2;
  
  img{
    width: 610px;
    height: 511px;
    object-fit: cover;
  }
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.5rem;
  height: 511px;

  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`

class Product extends Component {
  render() {
    const { product } = this.props;  
    return (
      <ProductContainer>
          <ImageBox>
            {
              product.gallery.length === 1 ? null
              : product.gallery.map(img =>(
                <img src={img} alt={product.name} key={img}/>
              ))
            }
          </ImageBox>
        <ImageContainer>
          <img src={product.gallery[0]} alt={product.name}/>
        </ImageContainer>
        <DescriptionContainer>
          <h1>{product.brand} {product.name}</h1>
        </DescriptionContainer>
      </ProductContainer>
    )
  }
};

export default Product;
