import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { PLP_DATA } from '../graphQL/Queries';
import CategoryItem from './Category-item';

import { connect } from 'react-redux';
import { addDataToProducts } from '../redux/currency/currency-action';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
class Categories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currency: "$",
      cart: []
    }
  }

  render() {
    const { data, addDataToProducts } = this.props;
    data.loading ? <h1>Loading...</h1> 
    : addDataToProducts(data)


    return (
      <Container>
        {data.loading 
          ? <h1>Loading...</h1> 
          : data.category.products.map(product => { 
            product.prices = product.prices.filter((price) => { 
              return price.currency.symbol === "$"
            });
            return(
              <CategoryItem key={product.id} selectedCurrency={product.prices} product={product} cart = {this.state.cart}/>
        )})}
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDataToProducts: data => dispatch(addDataToProducts(data))
});

export default connect(null, mapDispatchToProps)(graphql(PLP_DATA)(Categories));