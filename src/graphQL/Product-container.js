import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Categories from '../components/Categories';

import { connect } from 'react-redux';


const GET_CATEGORIES = gql`
    query category($id: String!)
    {
        product(id: $id){
            id
            name
            brand
            inStock
            gallery
            description
            category
                attributes{
            name
            type
            items{
                displayValue
                value
            }
            }
            prices{
            currency{
                symbol
            }
            }
        }
    }
`;

class ProductQuery extends Component {
    render() {
      const { id } = this.props;
      console.log(id)  

      return (
        <Query 
            query={GET_CATEGORIES}
            variables= {{id: id}}
        >
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading...</h1>;
                    console.log(data)
                }
            }
        </Query>
      )
    }
}

const mapStateToProps = state => ({
    id: state.product.productID
});

export default connect(mapStateToProps)(ProductQuery);