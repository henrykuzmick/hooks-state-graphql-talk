import React, { useReducer } from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

type State = {
  count: number;
};

type Action = {
  type: string;
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Current Count:
          </Typography>
          <Typography color="secondary" gutterBottom variant="h6">
            {state.count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch({ type: 'increment' })} size="small" color="primary">
            Add One
          </Button>
          <Button onClick={() => dispatch({ type: 'decrement' })} size="small" color="primary">
            Subtract One
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
