import React, { Component } from 'react';
import styled from 'styled-components';

const ValuesContainer = styled.div`
  display: flex;
  margin-top: -1rem;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.p`
    font-weight: 400;
    font-size: 1rem;

`

const Value = styled.p`
  cursor : pointer;
  padding: 5px;
  border: 1px solid #1D1F22;
  text-align: center;
  justify-content: center;
  margin-right: 8px;
  width: 63px;
  height: 22px;
  font-size: 16px;
`


  const ColorSwatch = styled.div`
  cursor : pointer;
  width: 16px;
  height: 16px;
  margin-top: 8px;
  border: 1px solid #1D1F22;
  background: ${props => props.Color};
  margin-right: 8px;
  border-radius: 2px;
`


class CartAttributes extends Component {
  render() {
    const { attribute } = this.props;

    return (
      <div>
        {attribute.type === "text"
            ? <div>
                <Title>{`${attribute.id}:`}</Title>
                <ValuesContainer>
                    {attribute.items.map(item => (
                        <Value key={item.id}>{item.value}</Value>
                    ))}
                </ValuesContainer>
                </div>
            : null
        }

        {attribute.type === "swatch" 
            ? <div>
                <Title>{`${attribute.id}:`}</Title>
                <ValuesContainer>
                    {attribute.items.map(item => (
                        <ColorSwatch key={item.id} Color = {item.value}/>
                    ))}
                </ValuesContainer>
              </div>
            : null
        }
      </div>
    )
  }
}

export default CartAttributes;