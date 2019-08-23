import React from 'react';
import faker from 'faker';
import { Container, List, Card, CardContent, Typography, ListItem, CardActions, Button } from '@material-ui/core';

import { useStore } from './useStore';
import { useActions } from './useActions';

export const Redux = () => {
  const { names } = useStore();
  const { getNames, postName } = useActions();

  const renderNames = () => (
    <List>
      {names.map(name => (
        <ListItem>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

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
          <Button onClick={getNames} size="small" color="primary">
            Load Names
          </Button>
          <Button onClick={() => postName(faker.name.firstName())} size="small" color="primary">
            Post Name
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
