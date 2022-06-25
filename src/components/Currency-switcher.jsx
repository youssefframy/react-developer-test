import React, { Component } from 'react'
import styled from 'styled-components';

import {graphql} from 'react-apollo';
import {CURRENCY_DATA} from '../graphQL/Queries';


const Switcher = styled.div`
    select{
        content: "$";
        border: none;
        padding: 2px;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        justify-content: center;

        &:focus{
            outline: none;
        }

        option{
          content: "$";
        }

    }
`

class CurrencySwitcher extends Component {
    render() {
    const data = this.props.data; 

    return (
        <Switcher>
        <select
          onChange={(e) =>{
              const selectedCurrency = e.target.value;
              this.setState({currency: selectedCurrency})
          }}
        >
        {data.loading ? 
            <option value="$">$</option> :                  
            data.currencies.map(currency => { 
            return (
                <option key={currency.symbol} value={currency.symbol} label={`${currency.symbol} ${currency.label}`}/>
            )
        })}
        </select>
        </Switcher>
    )
  }
}

export default graphql(CURRENCY_DATA)(CurrencySwitcher);