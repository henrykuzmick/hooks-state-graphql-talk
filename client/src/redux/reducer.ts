import { Action, GET_NAMES, GET_COLORS, POST_NAME } from './actions';

export type State = {
  names: string[];
  colors: string[];
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case GET_NAMES:
      return {
        ...state,
        names: action.payload.names
      };
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload.colors
      };
    case POST_NAME: {
      return {
        ...state,
        names: [...state.names, action.payload.name]
      };
    }
    default:
      return state;
  }
};
