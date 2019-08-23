import React, { createContext, useState, useContext } from 'react';

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

export const ModalsProvider = ({ children }: Props) => {
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

export const useModal = () => useContext(ModalsContext);
