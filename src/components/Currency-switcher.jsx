import React, { Component } from 'react'
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addCurrencies, changeCurrency } from '../redux/currency/currency-action';


const SwitcherContainer = styled.div`
    position: absolute;
    width: 114px;
    height: 169px;
    top: 30px;
    right: -60px;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    z-index: 5;

    ul {
        position: relative;
        text-decoration: none;
        list-style-type: none;
        margin-top: 0;
        margin-left: -40px;
    }
    
    li {
        /* border: 1px solid black; */
        width: 114px;
        font-weight: 400;
        font-size: 17px;
        line-height: 200%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: #EEEEEE; 
        }

    }
`

class CurrencySwitcher extends Component {
    render() {
    const { data, addCurrencies, changeCurrency } = this.props; 

    return (
        <SwitcherContainer>
        <ul>
        {
            data.currencies.map(currency => { 
                addCurrencies(currency.symbol)
                return (
                    <li key={currency.symbol} 
                        value={currency.symbol}
                        onClick={() => {changeCurrency(currency.symbol);}}
                    >
                        {`${currency.symbol} ${currency.label}`}
                    </li>
                )
            })
        }
        </ul>
        </SwitcherContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ 
    changeCurrency: currency => dispatch(changeCurrency(currency)),
    addCurrencies: currency => dispatch(addCurrencies(currency))
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);