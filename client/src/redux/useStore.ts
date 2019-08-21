import { useContext } from 'react';
import { ReduxContext } from './context';

export const useStore = () => {
  const { state } = useContext(ReduxContext);

  return {
    names: state.names,
    colors: state.colors
  };
};
