import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "../assets/logo.svg";
import CartIcon from './Cart-icon';

import CartDropdown from './Cart-dropdown';
import CurrencySwitcher from './Currency-switcher';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  height: 20vh;
`
const Wrapper = styled.div`
  width: 98%;
  padding-top: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Left = styled.div`   
  flex: 2;
  text-align: flex-start;
  padding-left: 3vw;
  align-items: center;
`
const Center = styled.div`
  flex: 2;
  margin-right: 13rem;
  text-align: center;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
  align-items: center;
  justify-content: flex-end;
`

const Label = styled.label`
  border: none;
  font-family: Raleway;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  padding: 1rem;
  color: ${({isActive}) => 
    isActive ? '#5ECE7B' : '#1D1F22'
  };
  text-align: center;
  cursor: pointer;
  border-bottom: ${({isActive}) => 
    isActive ? '2px solid #5ECE7B' : 'none'
    };
`
const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding-left: 1rem;
  font-weight: bold;
  cursor: pointer;
`

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
    }
  }
  
  render() {
    const { hidden, history } = this.props;

    return (
      <Container>
        <Wrapper>
          <Left>
              <Label isActive={this.state.active} value="ALL" onClick={() => history.push('/')} >ALL</Label>
              <Label value="TECH" >TECH</Label>
              <Label value="CLOTHES">CLOTHES</Label>
          </Left>
        
        <Center>
            <img src={Logo} alt="logo" onClick={() => history.push('/')} />
        </Center>

          <Right >
              <MenuItem>
                <CurrencySwitcher/>
              </MenuItem>
              <MenuItem>
                <CartIcon/>
              </MenuItem>
              {hidden ? null : <CartDropdown/>}
          </Right>
        </Wrapper>
      </Container>
    )
  }
}

const mapStateToProps = ({cart: {hidden}}) => ({
  hidden,
})

export default withRouter(connect(mapStateToProps)(Header));