import React from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  isModalFullScreen: boolean;
  closeModal: () => void;
  forceCloseModal: () => void;
  toggleFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined
);

export type { ModalContextType };
export default ModalContext;
