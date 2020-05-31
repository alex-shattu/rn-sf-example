import 'react-native-gesture-handler';
import React from 'react';
import { oauth, forceUtil } from 'react-native-force';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import axios from 'axios';
import Main from 'containers/Main/Main';
import Config from 'react-native-config';
console.log({ Config });
const cache = new InMemoryCache({
  addTypename: false,
});

const link = createHttpLink({
  uri: `https://${Config.DOMAIN}/services/apexrest/graphql`,
  fetch: (uri, { body: data, headers, method }) =>
    axios(uri, {
      data,
      headers,
      method,
      // transform "{ \"foo\": \"bar\" }" to { "foo": "bar" }
      transformResponse: response => response.replace(/^"|"$/g, '').replace(/\\"/g, '"'),
    }).then(response => ({
      text: () =>
        new Promise((resolve, reject) => {
          resolve(response.data);
        }),
    })),
});

const authLink = setContext(async (_, { headers }) => {
  let accessToken;
  try {
    const response = await new Promise((resolve, reject) =>
      oauth.getAuthCredentials(resolve, reject),
    );
    console.log('getAuthCredentials', response);
    accessToken = response.accessToken;
  } catch (error) {
    console.log('getAuthCredentials', error);
  }

  if (!accessToken) {
    try {
      const response = await new Promise(resolve => {
        oauth.authenticate(resolve, error => console.log(error));
      });
      console.log('authenticate', response);
      accessToken = response.accessToken;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

const App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate loading={null} persistor={persistor}>
    <ApolloProvider client={client}>
      <Main />
      {/* <View /> */}
    </ApolloProvider>
    // </PersistGate>
    // </Provider>
  );
};

export default App;
