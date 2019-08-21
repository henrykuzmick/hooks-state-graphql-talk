import { Action, GET_USERS, User } from './actions';

export type State = {
  users: User[];
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state;
  }
};
