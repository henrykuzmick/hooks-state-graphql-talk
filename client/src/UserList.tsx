import React from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import { useUsers, useMutations } from './hooks';

export const UserList = () => {
  const { users } = useUsers();
  const { createColor, createUser } = useMutations();

  const renderUsers = () => {
    if (!users) {
      return 'Loading...';
    }

    console.log({ users });

    return users.map((user: any) => <p>{user.name}</p>);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h2" color="textSecondary">
            User List
          </Typography>
          {renderUsers()}
        </CardContent>
        <CardActions>
          <Button onClick={createUser} size="small" color="primary">
            Create New User
          </Button>
          <Button onClick={createColor} size="small" color="primary">
            Create New Color
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
