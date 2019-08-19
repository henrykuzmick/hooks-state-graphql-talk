import React, { useState } from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

export const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Current Count:
          </Typography>
          <Typography color="secondary" gutterBottom variant="h6">
            {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setCount(count + 1)} size="small" color="primary">
            Add One
          </Button>
          <Button onClick={() => setCount(count - 1)} size="small" color="primary">
            Subtract One
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
