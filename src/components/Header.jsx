import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from "../assets/logo.svg";
import CartLogo from "../assets/cart.svg";
import CartDropdown from './Cart-dropdown';

import {graphql} from 'react-apollo';
import {CURRENCY_DATA} from '../graphQL/Queries';

const Container = styled.div`
  height: 20vh;
`
const Wrapper = styled.div`
  width: 97%;
  padding-top: 5vh;
  display: flex;
  align-items: center;
`

const Left = styled.div`   
  flex: 2;
  text-align: flex-start;
  padding-left: 3vw;
  align-items: center;
`
const Center = styled.div`
  flex: 2;
  margin-right: 10rem;
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

const Label = styled.button`
  border: none;
  font-family: Raleway;
  background: transparent;
  padding: 1rem;
  color: ${({isActive}) => 
    isActive ? '#5ECE7B' : '#1D1F22'
  };
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-bottom: ${({isActive}) => 
    isActive ? '1px solid #5ECE7B' : 'none'
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

const CartBadge = styled.div`
  position: absolute;
  font-size: 0.7rem;
  font-weight: normal;
  top: -9px;
  right: -7px;
  color: #FFFFFF;
  width: 1rem;
  height: 1rem;
  background-color: #1D1F22;
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Switcher = styled.div`
    select{
        content: "$";
        border: none;
        padding: 2px;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        justify-content: center;

        &:focus{
            outline: none;
        }

        option{
          content: "$";
        }

    }
`

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '$',
      active: true,
      hidden: true,
    }
  }
  
  render() {
    const data = this.props.data;
    return (
      <Container>
        <Wrapper>
          <Left>
              <Label isActive={this.state.active} value="ALL" >ALL</Label>
              <Label value="TECH" >TECH</Label>
              <Label value="CLOTHES">CLOTHES</Label>
          </Left>
        
        <Center>
            <img src={Logo} alt="logo"/>
        </Center>

          <Right >
              <MenuItem>
              <Switcher>
                <select
                  onChange={(e) =>{
                      const selectedCurrency = e.target.value;
                      this.setState({currency: selectedCurrency})
                  }}
                >
                {data.loading ? 
                    <option value="$">$</option> :                  
                    data.currencies.map(currency => { 
                    return (
                        <option key={currency.symbol} value={currency.symbol} label={`${currency.symbol} ${currency.label}`}/>
                    )
                })}
                </select>
            </Switcher>
              </MenuItem>
              <MenuItem onClick={() => {this.setState({hidden: !this.state.hidden})}}>
                <CartBadge>2</CartBadge>
                <img src={CartLogo} alt="cart"/>
              </MenuItem>
              {this.state.hidden ? null : <CartDropdown/>}
          </Right>
        </Wrapper>
      </Container>
    )
  }
}

export default graphql(CURRENCY_DATA)(Header);