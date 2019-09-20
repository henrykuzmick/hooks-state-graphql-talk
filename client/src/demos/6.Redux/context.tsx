import React, { createContext, useReducer } from 'react';

import { initialState } from './initialState';
import { reducer, State } from './reducer';
import { Action } from './actions';

type Props = {
  children: React.ReactNode;
};

type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const ReduxContext = createContext<Context>({ state: initialState, dispatch: () => {} });

export const ReduxProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ReduxContext.Provider value={{ state, dispatch }}>{children}</ReduxContext.Provider>;
};
