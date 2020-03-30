import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://api.8base.com/ck8dpazkl000208mqb9fq5yh1'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
