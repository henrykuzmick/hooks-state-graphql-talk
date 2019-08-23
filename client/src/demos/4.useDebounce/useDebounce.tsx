import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, TextField, Typography } from '@material-ui/core';

const useDebounce = (initialValue: string, delay: number) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return {
    value,
    debouncedValue,
    setValue
  };
};

export const UseDebounce = () => {
  const { value, debouncedValue, setValue } = useDebounce('', 500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <TextField label="Some Query" value={value} onChange={onChange} />
          <br />
          <br />
          <Typography variant="body2" color="textSecondary">
            Current debounced value:
          </Typography>
          <Typography color="secondary" gutterBottom variant="h6">
            {debouncedValue}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
