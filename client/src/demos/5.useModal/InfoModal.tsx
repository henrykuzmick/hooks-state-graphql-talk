import React from 'react';
import Modal from 'react-modal';
import { Button, Typography } from '@material-ui/core';

export interface InfoModalProps {
  message: string;
}

export interface InfoModalType {
  type: 'info';
  props: InfoModalProps;
}

interface Props extends InfoModalProps {
  onClose: () => void;
}

export const InfoModal = (props: Props) => {
  return (
    <Modal isOpen>
      <div>
        <Typography gutterBottom variant="h6">
          Info Modal
        </Typography>
        <Typography gutterBottom variant="body2">
          {props.message}
        </Typography>
        <Button onClick={props.onClose} variant="contained" color="primary">
          Close Modal
        </Button>
      </div>
    </Modal>
  );
};
