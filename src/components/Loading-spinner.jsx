import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.h1`
  top: 40%;
  left: 47%;
  position: fixed;
  border: 16px solid #e4e4e4 ;
  border-top: 16px #5ECE7B solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: spin 2s linear infinite;


  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

class LoadingSpinner extends Component {
  render() {
    return (
        <StyledSpinner/> 
    )
  }
}

export default LoadingSpinner;