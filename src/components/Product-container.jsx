import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Product from './Product-item';
import LoadingSpinner from './Loading-spinner';

import { GET_PRODUCT } from '../graphQL/Queries';

class ProductQuery extends Component {
    render() {
      const { id } = this.props;

      return (
        <Query 
            query={GET_PRODUCT}
            variables= {{id: id}}
        >
            {
                ({loading, data}) => {
                    if (loading) return <LoadingSpinner />;
                    return <Product key={data.product.id} product={data.product}/>
                }
            }
        </Query>
      )
    }
}

export default ProductQuery;