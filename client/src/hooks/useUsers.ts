import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { Users, Users_users } from '../../generated/schema';

const USERS = loader('../apollo/queries/Users.graphql');

export const useUsers = (): [Users_users[] | null, boolean] => {
  const usersQuery = useQuery<Users>(USERS);

  const users = usersQuery.data && usersQuery.data.users ? usersQuery.data.users : null;

  return [users, usersQuery.loading];
};
