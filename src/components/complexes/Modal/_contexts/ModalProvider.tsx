import { useMemo } from 'react';
import ModalContext, { ModalContextType } from './modal-context';

interface ModalProviderType extends ModalContextType {
  children: React.ReactNode;
}

const ModalProvider = (props: ModalProviderType) => {
  const {
    isModalOpen,
    isModalFullScreen,
    children,
    closeModal,
    forceCloseModal,
    toggleFullScreen,
  } = props;

  const providerValue = useMemo(
    () => ({
      isModalOpen,
      isModalFullScreen,
      closeModal,
      forceCloseModal,
      toggleFullScreen,
    }),
    [
      isModalOpen,
      isModalFullScreen,
      closeModal,
      forceCloseModal,
      toggleFullScreen,
    ]
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
