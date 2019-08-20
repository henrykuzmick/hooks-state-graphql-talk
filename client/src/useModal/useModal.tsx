import React, { createContext, useState, useContext } from 'react';
import { Container, Button, Card, CardContent, Typography, CardActions } from '@material-ui/core';

import { InfoModal, InfoModalType } from './InfoModal';
import { WarningModalType, WarningModal } from './WarningModal';

type ModalType = InfoModalType | WarningModalType | null;

type ContextProps = {
  modal: ModalType;
  showModal: (modal: ModalType) => void;
};

type Props = {
  children: React.ReactNode;
};

const ModalsContext = createContext<ContextProps>({ modal: null, showModal: () => {} });

const ModalsProvider = ({ children }: Props) => {
  const [modal, showModal] = useState<ModalType>(null);

  const onClose = () => showModal(null);

  const renderModal = () => {
    if (!modal) {
      return null;
    }

    switch (modal.type) {
      case 'info': {
        return <InfoModal {...modal.props} onClose={onClose} />;
      }
      case 'warning': {
        return <WarningModal {...modal.props} onClose={onClose} />;
      }
    }
  };

  return (
    <ModalsContext.Provider value={{ modal, showModal }}>
      {children}
      {renderModal()}
    </ModalsContext.Provider>
  );
};

const useModal = () => useContext(ModalsContext);

export const ModalApp = () => {
  return (
    <ModalsProvider>
      <ModalComponent />
    </ModalsProvider>
  );
};

const ModalComponent = () => {
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
