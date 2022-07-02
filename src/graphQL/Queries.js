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
                category
                brand
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
`

export const CURRENCY_DATA = gql `
    {
        currencies{
            label
            symbol
        }
    }
`