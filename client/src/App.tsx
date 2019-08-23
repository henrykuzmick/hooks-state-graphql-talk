import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloProvider as OldApolloProvider } from 'react-apollo';

import './App.css';
import client from './apollo';
import { UserList } from './UserListNoHooks';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserList />
    </ApolloProvider>
  );
};

export const AppNoHooks = () => {
  return (
    <OldApolloProvider client={client}>
      <UserList />
    </OldApolloProvider>
  );
};
