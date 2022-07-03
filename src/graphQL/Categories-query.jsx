import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Categories from '../components/Categories';

const GET_CATEGORIES = gql`
    {
        category{
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

class CategoriesQuery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: "test"
        }
    }

    render() {

      return (
        <Query query={GET_CATEGORIES}>
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

export default CategoriesQuery;