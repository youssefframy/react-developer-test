import React, { Component } from 'react'
import styled from 'styled-components';

import { graphql } from 'react-apollo';
import { CURRENCY_DATA } from '../graphQL/Queries';

import { connect } from 'react-redux';
import { changeCurrency } from '../redux/currency/currency-action';


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
    }
`

class CurrencySwitcher extends Component {
    render() {
    const { data, changeCurrency } = this.props; 

    return (
        <Switcher>
        <select
          onChange={(e) =>{
              const selectedCurrency = e.target.value;
              changeCurrency(selectedCurrency);
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

const mapDispatchToProps = (dispatch) => ({ 
    changeCurrency: currency => dispatch(changeCurrency(currency))
});

export default connect(null, mapDispatchToProps)(graphql(CURRENCY_DATA)(CurrencySwitcher));