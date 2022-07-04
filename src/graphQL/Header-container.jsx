import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from '../components/Header';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

class HeaderContainer extends Component {
  render() {
    return (
      <Query query={GET_CART_HIDDEN}>
        {
            ({data: { cartHidden }}) => <Header hidden={cartHidden} />
        }
      </Query>
    )
  }
}

export default HeaderContainer;