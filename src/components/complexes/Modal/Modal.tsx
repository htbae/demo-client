import { portalId } from '@/constants/portal-id';
import useOnEscapeClick from '@/hooks/ui/useKeyEvent';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import BackDrop from './_components/BackDrop';
import ModalProvider from './_contexts/ModalProvider';
import ModalOverlay from './_components/ModalOverlay';
import ModalContainerWrapper from './_components/ModalContainerWrapper';
import { ModalType } from './modal-type';
import ModalContainer from './_components/ModalContainer';
import useLockModal from './_hooks/useLockModal';
import useModalEvent from './_hooks/useModalEvent';

const Modal = (props: ModalType) => {
  // Extract props
  const {
    children,
    isModalOpen,
    size = 'lg',
    isConfirmMode = false,
    isSubModal = false,
    closeModal: handleClose,
  } = props;

  // States
  const [isModalFullScreen, toggleFullScreen] = useState<boolean>(false);
  const [target, setTarget] = useState<EventTarget | null>(null);

  const { closeModal } = useModalEvent({ isConfirmMode, handleClose });

  // Initialize modal event
  useOnEscapeClick(closeModal, 'body');
  useLockModal({ isModalOpen, isSubModal });

  useEffect(() => {
    if (!isModalOpen) {
      toggleFullScreen(false);
    }
  }, [isModalOpen]);

  return (
    <ModalProvider
      isModalOpen={isModalOpen}
      isModalFullScreen={isModalFullScreen}
      closeModal={closeModal}
      forceCloseModal={handleClose}
      toggleFullScreen={toggleFullScreen}
    >
      {ReactDOM.createPortal(
        <BackDrop
          isOpen={isModalOpen}
          onClick={closeModal}
          isSubModal={isSubModal}
        />,
        document.getElementById(
          !isSubModal ? portalId.modalBackdrop : portalId.subModalBackdrop
        )!
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          target={target}
          updateTarget={setTarget}
          isSubModal={isSubModal}
        >
          <ModalContainerWrapper>
            <ModalContainer size={size} updateTarget={setTarget}>
              {children}
            </ModalContainer>
          </ModalContainerWrapper>
        </ModalOverlay>,
        document.getElementById(
          !isSubModal ? portalId.modal : portalId.subModal
        )!
      )}
    </ModalProvider>
  );
};

export default Modal;
