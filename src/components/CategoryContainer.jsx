import React, { Component } from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import {CategoryOverview} from './CategoryOverview';

const GET_CATEGORIES = gql `
    {
        categories{
            products{
                name
                inStock
                gallery
                description
                category
                attributes{
                    name
                    type
                }
                        prices{
                    currency{
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`

class CategoryContainer extends Component {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {
            ({loading, error, data}) => { 
                console.log(loading);
                console.log(error);
                console.log(data);
                if (loading) return <h1>Loading....</h1>;
                return <CategoryOverview categories = {data.categories}></CategoryOverview>
            }
        }
      </Query>
    )
  }
}

export default CategoryContainer;