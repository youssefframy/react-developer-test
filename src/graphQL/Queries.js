import {gql} from 'apollo-boost';

export const PLP_DATA = gql`
    {
        category{
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