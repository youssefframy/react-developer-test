import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Categories from '../components/Categories';

import { connect } from 'react-redux';


const GET_CATEGORIES = gql`
    query category($title: String!)
    {
        category (input: {title: $title}) {
            products{
                id
                brand
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
    render() {
      const { title } = this.props;

      return (
        <Query 
            query={GET_CATEGORIES}
            variables= {{title: title}}
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

const mapStateToProps = state => ({
    title: state.category.categoryTitle
});

export default connect(mapStateToProps)(CategoriesQuery);