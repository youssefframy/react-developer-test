import React, { Component } from 'react';
import { Query } from 'react-apollo';

import CategoryNames from './Category-names';
import { GET_CATEGORIES } from '../graphQL/Queries';

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