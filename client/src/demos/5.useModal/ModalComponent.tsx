import React from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import { useModal } from './context';

export const ModalComponent = () => {
  const { showModal } = useModal();

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Modals yo
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => showModal({ type: 'info', props: { message: 'hello' } })} size="small" color="primary">
            Show Info Modal
          </Button>
          <Button
            onClick={() => showModal({ type: 'warning', props: { warning: 'oh no, smth wrong :(' } })}
            size="small"
            color="primary"
          >
            Show Error Modal
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
