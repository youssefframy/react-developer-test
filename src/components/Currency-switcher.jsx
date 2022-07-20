import React, { Component } from 'react'
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addCurrencies, changeCurrency } from '../redux/currency/currency-action';


const Switcher = styled.div`
    select{
        background: transparent;
        border: none;
        outline: none;
        scroll-behavior: smooth;
        padding: 2px;
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        justify-content: center;
        appearance: none;
        border: 0;

        &:focus{
            outline: none;
        }
    
    }
`

class CurrencySwitcher extends Component {
    render() {
    const { data, addCurrencies, changeCurrency } = this.props; 

    return (
        <Switcher>
        <select
          onChange={(e) =>{
              const selectedCurrency = e.target.value;
              changeCurrency(selectedCurrency);
          }}
        >
        {data.currencies.map(currency => { 
            addCurrencies(currency.symbol)
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
    changeCurrency: currency => dispatch(changeCurrency(currency)),
    addCurrencies: currency => dispatch(addCurrencies(currency))
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);