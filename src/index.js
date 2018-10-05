import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

const BASE_URL = "https://homework.mylocale.co.uk/graphql"
const AUTH_TOKEN = "auth-token"
const token = localStorage.getItem(AUTH_TOKEN);

const httpLink = new HttpLink({
  uri: BASE_URL,
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${
      token
      }`,
  },
});

const authLink = setContext((_, { headers }) => {
  console.log(headers)
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = authLink.concat(ApolloLink.from([errorLink, httpLink]));

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();