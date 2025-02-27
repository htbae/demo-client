import React from 'react';
import ModalContext, { ModalContextType } from '../_contexts/modal-context';

export const useModalContext = (): ModalContextType => {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error('ModalContext is required!');
  }

  return context;
};
