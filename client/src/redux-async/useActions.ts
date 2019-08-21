import { useContext } from 'react';
import * as actions from './actions';
import { ReduxContext } from './context';

export const useActions = () => {
  const { dispatch } = useContext(ReduxContext);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    dispatch(actions.getUsers(users));
  };

  return {
    getUsers
  };
};
