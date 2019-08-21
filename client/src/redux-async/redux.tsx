import React, { useState } from 'react';
import {
  Container,
  List,
  Card,
  CardContent,
  Typography,
  ListItem,
  CardActions,
  Button,
  CircularProgress
} from '@material-ui/core';

import { useStore } from './useStore';
import { useActions } from './useActions';

export const Redux = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { users } = useStore();
  const { getUsers } = useActions();

  const renderNames = () => (
    <List>
      {users.map(user => (
        <ListItem>
          <Typography variant="body2" color="textSecondary">
            {user.name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  const loadUsers = async () => {
    setLoading(true);
    await getUsers();
    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            All Names:
          </Typography>
          {renderNames()}
        </CardContent>
        <CardActions>
          <Button onClick={loadUsers} size="small" color="primary">
            {loading && <CircularProgress size={12} />}
            Load Users
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
