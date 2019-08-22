import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import client from './apollo';
import { UserList } from './UserList';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <UserList />
    </ApolloProvider>
  );
};

export default App;
