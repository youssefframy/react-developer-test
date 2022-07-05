import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Categories from '../components/Categories';


import { connect } from 'react-redux';
import { addData } from '../redux/currency/currency-action';


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
      const { title, addData } = this.props;

      return (
        <Query 
            query={GET_CATEGORIES}
            variables= {{title: title}}
        >
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading...</h1>;
                    addData(data.category.products)  
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

const mapDispatchToProps = (dispatch) => ({
    addData: data => dispatch(addData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesQuery);