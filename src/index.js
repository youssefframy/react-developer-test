import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient} from 'apollo-boost';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';
// import {resolvers, typeDefs} from './graphQL/resolver';
import reportWebVitals from './reportWebVitals';

const httpLink = createHttpLink({ 
  uri: 'http://localhost:4000'
});

const cache = new InMemoryCache();

const client = new ApolloClient({ 
  link: httpLink,
  cache: cache,
  // typeDefs,
  // resolvers
});

client.writeData({ 
  data: { 
    cartHidden: true
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>, 
);

reportWebVitals();
