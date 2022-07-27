import React, { Component } from 'react';
import { Query } from 'react-apollo';

import CategoryNames from './Category-names';
import LoadingSpinner from './Loading-spinner';

import { GET_CATEGORIES } from '../graphQL/Queries';

class CategoryNamesQuery extends Component {
    render() {

      return (
        <Query 
            query={GET_CATEGORIES}
        >
            {
                ({loading, data}) => {
                    if (loading) return <LoadingSpinner />;
                    return <CategoryNames data = {data.categories}/>
                }
            }
        </Query>
      )
    }
}

export default CategoryNamesQuery;