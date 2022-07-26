import React, { Component } from 'react';
import { Query } from 'react-apollo';

import CurrencySwitcher from './Currency-switcher';
import { GET_CURRENCY_DATA } from '../graphQL/Queries';

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