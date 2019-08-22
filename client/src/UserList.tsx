import React from 'react';
import { useUsers } from './hooks';

export const UserList = () => {
  const { users } = useUsers();
  console.log(users);
  return <div>Hello :p</div>;
};
