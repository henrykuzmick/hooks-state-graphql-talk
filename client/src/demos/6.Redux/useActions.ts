import { useContext } from 'react';
import * as actions from './actions';
import { ReduxContext } from './context';

export const useActions = () => {
  const { dispatch } = useContext(ReduxContext);

  const getNames = () => {
    dispatch(actions.getNames());
  };

  const getColors = () => {
    dispatch(actions.getColors());
  };

  const postName = (name: string) => {
    dispatch(actions.postName(name));
  };

  return {
    getNames,
    getColors,
    postName
  };
};
