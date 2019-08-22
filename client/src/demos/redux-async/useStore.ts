import { useContext } from 'react';
import { ReduxContext } from './context';

export const useStore = () => {
  const { state } = useContext(ReduxContext);

  return {
    users: state.users
  };
};
