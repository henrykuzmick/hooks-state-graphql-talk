export const GET_USERS = 'GET_USERS';

export type User = {
  id: string;
  name: string;
};

type GetUsers = {
  type: typeof GET_USERS;
  payload: {
    users: User[];
  };
};

export type Action = GetUsers;

export const getUsers = (users: User[]): GetUsers => ({
  type: GET_USERS,
  payload: {
    users
  }
});
