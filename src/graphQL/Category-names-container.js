import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CategoryNames from '../components/Category-names';

const GET_CATEGORIES = gql`
    query categories {
        categories{
            name
        }
    }
`
class CategoryNamesQuery extends Component {
    render() {

      return (
        <Query 
            query={GET_CATEGORIES}
        >
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading...</h1>;
                    return <CategoryNames data = {data.categories}/>
                }
            }
        </Query>
      )
    }
}

export default CategoryNamesQuery;