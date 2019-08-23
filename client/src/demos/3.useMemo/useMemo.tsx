import React, { useState, useMemo } from 'react';
import faker from 'faker';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

export const UseMemo = () => {
  const [name, setName] = useState(faker.name.firstName());
  const [color, setColor] = useState(faker.internet.color());

  const setRandomColor = () => setColor(faker.internet.color());
  const setRandomName = () => setName(faker.name.firstName());

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <div>
            <Typography variant="body2" color="textSecondary">
              Some Name
            </Typography>
            <Typography style={{ color: 'white', backgroundColor: color }} gutterBottom variant="h6">
              {name}
            </Typography>
          </div>
          {useMemo(
            () => (
              <div>
                <Typography variant="body2" color="textSecondary">
                  Some Memoized Name
                </Typography>
                <Typography style={{ color: 'white', backgroundColor: color }} gutterBottom variant="h6">
                  {name}
                </Typography>
              </div>
            ),
            [color]
          )}
        </CardContent>
        <CardActions>
          <Button onClick={setRandomName} size="small" color="primary">
            Set Random Name
          </Button>
          <Button onClick={setRandomColor} size="small" color="primary">
            Set Random Color
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
