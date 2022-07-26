import { gql } from 'apollo-boost';

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query category($title: String!)
    {
        category (input: {title: $title}) {
            products{
                id
                brand
                name
                gallery
                inStock
                category
                brand
                description
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
`;

export const GET_CATEGORIES = gql`
    query categories {
        categories{
            name
        }
    }
`

export const GET_CURRENCY_DATA = gql `
    {
        currencies{
            label
            symbol
        }
    }
`

export const GET_PRODUCT = gql`
    query category($id: String!)
    {
        product(id: $id){
            id
            name
            brand
            inStock
            gallery
            description
            category
            attributes{
                id
                name
                type
            items{
                displayValue
                value
            }
            }
            prices{
            amount
            currency{
                symbol
            }
            }
        }
    }
`;
