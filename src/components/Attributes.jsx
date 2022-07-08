import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';


const ValuesContainer = styled.div`
  display: flex;
  margin-top: -1rem;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
`

const Value = styled.p`
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: 'Source Sans Pro';
  cursor : pointer;
  padding: 5px;
  border: 1px solid #1D1F22;
  color: ${props => props.Color};;
  background-color: ${props => props.Background};
  margin-right: 8px;
  width: 40px;
  height: 18px;
  font-size: 16px;
  transition: all 0.2s;

  &:focus{
    outline: none;
  }

  &:hover{
    color: #FFFFFF;
    background: #1D1F22;
  }
`

const ColorContainer = styled.div`
  width: 33px;
  height: 33px;
  margin-top: 1rem;
  margin-right: 5px;
  border: 2px solid ${props => props.BorderColor};
  position: relative;
  transition: all 0.2s;

  &:hover {
    border: 2px solid #5ECE7B;
  }
`

  const ColorSwatch = styled.div`
  cursor : pointer;
  width: 30px;
  height: 30px;
  border: 1px solid #d0cfcf;
  background: ${props => props.Color};
  margin-right: 8px;
  position: absolute;
  padding-left: 1px;
  padding-bottom: 1px;
`

class Attributes extends Component {
  render() {
    const { attribute, attributeState} = this.props;
    let currentIndex = 0
    attributeState.map(currentAttribute => {
      if(currentAttribute.name === attribute.id){
          currentIndex = attributeState.indexOf(currentAttribute)
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
                      onClick={() => {
                        this.props.updateSelectedOptions({
                          name: attribute.id,
                          value: item.value,
                        })
                      }
                    }
                    Color = {item.value === attributeState[currentIndex].value ? "#FFFFFF" : "#1D1F22"
                  }
                    Background = {item.value === attributeState[currentIndex].value ? "#1D1F22" : "#FFFFFF"}
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
                      <ColorContainer  BorderColor = {attributeState[currentIndex].value === item.value ? "#5ECE7B" : "transparent"}>
                      <ColorSwatch key={item.id} Color = {item.value}
                        onClick={() =>{
                          this.props.updateSelectedOptions({
                            name: attribute.id,
                            value: item.value,
                          })
                        }}
                      />
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

const mapStateToProps = (state) => ({
  selectedAttributes: state.cart.selectedAttributes
});

export default connect(mapStateToProps)(Attributes);