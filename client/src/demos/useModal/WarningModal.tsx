import React from 'react';
import Modal from 'react-modal';
import { Button, Typography } from '@material-ui/core';

export interface WarningModalProps {
  warning: string;
}

export interface WarningModalType {
  type: 'warning';
  props: WarningModalProps;
}

interface Props extends WarningModalProps {
  onClose: () => void;
}

export const WarningModal = (props: Props) => {
  return (
    <Modal isOpen>
      <div>
        <Typography color="error" gutterBottom variant="h6">
          Warning Modal
        </Typography>
        <Typography gutterBottom variant="body2">
          {props.warning}
        </Typography>
        <Button onClick={props.onClose} variant="contained" color="primary">
          Close Modal
        </Button>
      </div>
    </Modal>
  );
};
