import React, { Component } from 'react';
import { Query } from 'react-apollo';

import Categories from './Categories';
import {GET_PRODUCTS_BY_CATEGORY} from '../graphQL/Queries';

class CategoriesQuery extends Component {
    render() {
      const { id } = this.props;

      return (
        <Query 
            query={GET_PRODUCTS_BY_CATEGORY}
            variables= {{title: id}}
        >
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading...</h1>;
                    return <Categories data = {data}/>
                }
            }
        </Query>
      )
    }
}


export default CategoriesQuery;