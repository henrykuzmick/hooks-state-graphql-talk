import React from 'react';
import { ReduxProvider } from './context';
import { Redux } from './';

export const App = () => (
  <ReduxProvider>
    <Redux />
  </ReduxProvider>
);
