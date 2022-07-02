import React, { Component } from 'react';
import styled from 'styled-components';

const ValuesContainer = styled.div`
  display: flex;
  margin-top: -1rem;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`

const Value = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  cursor : pointer;
  padding: 5px;
  border: 1px solid #1D1F22;
  margin-right: 8px;
  width: 45px;
  height: 30px;
  font-size: 20px;
  border-radius: 2px;
`

  const ColorSwatch = styled.div`
  cursor : pointer;
  width: 30px;
  height: 30px;
  margin-top: 1rem;
  border: 1px solid #1D1F22;
  background: ${props => props.Color};
  margin-right: 8px;
  border-radius: 2px;
`


class CheckoutAttributes extends Component {
  render() {
    const { attribute } = this.props;

    return (
      <div>
        {attribute.type === "text"
            ? <div>
                <Title>{`${attribute.id}:`}</Title>
                <ValuesContainer>
                    {attribute.items.map(item => (
                        <Value key={item.id}>
                            {item.value}
                        </Value>
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

export default CheckoutAttributes;