import React from 'react';
import { ModalsProvider } from './context';
import { ModalComponent } from './ModalComponent';

export const App = () => {
  return (
    <ModalsProvider>
      <ModalComponent />
    </ModalsProvider>
  );
};
