import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CurrencySwitcher from '../components/Currency-switcher';

const GET_CURRENCY_DATA = gql `
    {
        currencies{
            label
            symbol
        }
    }
`
class CurrencyQuery extends Component {
    render() {
      return (
        <Query query={GET_CURRENCY_DATA}>
            {
                ({loading, data}) => {
                    if (loading) return <h1>Loading</h1>;  
                    return <CurrencySwitcher data = {data}/>
                }
            }
        </Query>
      )
    }
}

export default CurrencyQuery;