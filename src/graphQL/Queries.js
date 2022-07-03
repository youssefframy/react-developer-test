import {gql} from 'apollo-boost';

export const CURRENCY_DATA = gql `
    {
        currencies{
            label
            symbol
        }
    }
`