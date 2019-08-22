import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const USERS = loader('../apollo/queries/Users.graphql');

export const useUsers = () => {
  const usersQuery = useQuery(USERS);

  const users = usersQuery.data && usersQuery.data.users ? usersQuery.data.users : null;

  return { users };
};
