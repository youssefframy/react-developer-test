import React, { Component } from 'react'
import styled from 'styled-components';

import Link from 'react-router-dom';
import { changeCategory } from '../redux/category/category-action';
import { connect } from 'react-redux';


const Label = styled.p`
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
  transition: all 0.2s;

  &:hover{
    color: #5ECE7B;
  }

  &.active{
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
  }

`

class CategoryNames extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {
            data.map((category) => 
                <Label>{category.name}</Label>
            )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    changeCategory: (category) => dispatch(changeCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryNames);