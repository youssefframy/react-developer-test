import {gql} from 'apollo-boost';

export const PLP_DATA = gql`
    {
        category{
            name
            products{
                id
                name
                gallery
                inStock
                prices{
                    currency{symbol}
                    amount
                }
                category
            }
        }
    }
`

export const CURRENCY_DATA = gql `
    {
        currencies{
            label
            symbol
        }
    }
`