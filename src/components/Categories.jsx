import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CategoryItem from './Category-item';



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
class Categories extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container>
        {data.category.products.map(product => { 
            return(
              <CategoryItem key={product.id} selectedCurrency={product.prices} product={product}/>
        )})}
      </Container>
    )
  }
}

const mapStateToProps = state => ({ 
  currency: state.currencySwitcher.currency
})
  


export default connect(mapStateToProps)(Categories);