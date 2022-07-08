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
  padding: 5px;
  border: 1px solid #1D1F22;
  text-align: center;
  justify-content: center;
  margin-right: 8px;
  width: 63px;
  height: 22px;
  font-size: 16px;
  color: ${props => props.Color};;
  background-color: ${props => props.Background};
`
const ColorContainer = styled.div`
  width: 19px;
  height: 19px;
  margin-top: 10px;
  margin-right: 5px;
  border: 2px solid ${props => props.BorderColor};
`

const ColorSwatch = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #1D1F22;
  background: ${props => props.Color};
  margin-right: 8px;

`


class CartAttributes extends Component {
  render() {
    const { attribute, selectedAttributes } = this.props;
    let currentIndex = 0
    selectedAttributes.map(currentAttribute => {
      if(currentAttribute.name === attribute.id){
          currentIndex = selectedAttributes.indexOf(currentAttribute)
          }
            return currentIndex
    })

    return (
      <div>
        {attribute.type === "text"
            ? <div>
                <Title>{`${attribute.id}:`}</Title>
                <ValuesContainer>
                    {attribute.items.map(item => (
                        <Value key={item.id}
                        Color = {item.value === selectedAttributes[currentIndex].value ? "#FFFFFF" : "#1D1F22"}
                        Background = {item.value === selectedAttributes[currentIndex].value ? "#1D1F22" : "#FFFFFF"}
                        >
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
                       <ColorContainer  BorderColor = {selectedAttributes[currentIndex].value === item.value ? "#5ECE7B" : "transparent"}>

                         <ColorSwatch key={item.id} Color = {item.value}/>
                       </ColorContainer>
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