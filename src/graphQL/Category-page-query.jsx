import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Categories from '../components/Categories';

const GET_CATEGORY_BY_TITLE = gql`
    query category($title: String!)
    {
        category (input: {title: $title}){
            name
            products{
                id
                name
                gallery
                inStock
                category
                brand
                description
                attributes{
                id
                type
                items {
                    id
                    value
                }
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
`;

class CategoryPage extends Component {
    render() {
      return (
        <Query 
        query={GET_CATEGORY_BY_TITLE}

        >
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading</h1>;
                    return <Categories data = {data}/>
                }
            }
        </Query>
      )
    }
}

export default CategoryPage;