import React, { Component } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  width: 121px;
  height: 190px;
  align-items: center;
  justify-content: right;
  object-fit: cover;
`

class CartItem extends Component {
  render() {
    const {item} = this.props

    return (
      <ItemContainer>
        <div>
          <p>{item.name}</p>
          <p>Size: </p>
          <></>
        </div>
        <Image src={item.gallery[0]}/>
      </ItemContainer>
    )
  }
}



export default CartItem;