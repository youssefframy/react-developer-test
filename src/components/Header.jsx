import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from "../assets/logo.svg";
import CartIcon from './Cart-icon';

import CartDropdown from './Cart-dropdown';
import { default as CurrencySwitcher} from '../graphQL/Currency-container';

import { changeCategory } from '../redux/category/category-action';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

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

const Left = styled.ul`   
  flex: 2;
  text-align: flex-start;
  padding-left: 2vw;
  align-items: center;
  text-decoration: none;
  list-style-type: none;
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

const Label = styled.li`
  display: inline-block;
  border: none;
  font-family: Raleway;
  background: transparent;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s;

  &.active{
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
  }

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
      all: true,
      tech: false,
      clothes: false
    }
  }
  
  render() {
    const { hidden, history, changeCategory } = this.props;
    const All = this.state.all ? 'active' : 'hidden'; 
    const Tech = this.state.tech ? 'active' : 'hidden'; 
    const Clothes = this.state.clothes ? 'active' : 'hidden'; 

    return (
      <Container>
        <Wrapper>
          <Left>
            <Link to={`/`}>
              <Label className={All} value="all" onClick={(e) => {
                this.setState({ all: true, tech: false, clothes: false });
                const categoryName = (e.target.innerHTML);
                changeCategory(categoryName);
              }}>
              all
              </Label>
            </Link>
            <Link to={`/`}>
                <Label className={Tech} onClick={(e) => {
                  this.setState({ tech: true, all: false, clothes: false});
                  const categoryName = (e.target.innerHTML);
                  changeCategory(categoryName);
                }}>
                tech
                </Label>
              </Link>
              <Link to={`/`}>        
                <Label className={Clothes} onClick={(e) => {
                  this.setState({ clothes: true, all: false, tech: false});
                  const categoryName = (e.target.innerHTML);
                  changeCategory(categoryName);
                }}>
                  clothes
                </Label>
              </Link>
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

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));