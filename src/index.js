import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const httpLink = createHttpLink({ 
  uri: 'http://localhost:4000'
});

const cache = new InMemoryCache();

const client = new ApolloClient({ 
  link: httpLink,
  cache: cache,
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
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>, 
);

reportWebVitals();
