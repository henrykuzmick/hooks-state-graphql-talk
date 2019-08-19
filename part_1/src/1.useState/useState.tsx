import React, { useState } from 'react';
import { Container, Button, Card, CardContent } from '@material-ui/core';

export const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <p>Current Count: {count}</p>
          <Button onClick={() => setCount(count + 1)}>Add One</Button>
          <Button onClick={() => setCount(count - 1)}>Subtract One</Button>
        </CardContent>
      </Card>
    </Container>
  );
};
