import React from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import { useUsers, useColors, useMutations } from './hooks';

export const UserList = () => {
  const [users] = useUsers();
  const [colors] = useColors();
  const { createColor, createUser } = useMutations();

  const renderUsers = () => {
    if (!users) {
      return 'Loading...';
    }

    return users.map(user => <p style={{ backgroundColor: user.color.value }}>{user.name}</p>);
  };

  const createNewUser = () => {
    const color = colors ? colors[Math.floor(Math.random() * colors.length)] : undefined;
    createUser(color);
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
          <Button onClick={createNewUser} size="small" color="primary">
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
