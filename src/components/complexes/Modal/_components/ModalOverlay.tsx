import { useRef } from 'react';
import { useModalContext } from '../_hooks/useModalContext';
import { modalClasses } from '../modal-classes';
import clsx from 'clsx';

interface ModalOverlayType {
  target: EventTarget | null;
  isSubModal: boolean;
  children: React.ReactNode;
  updateTarget: (target: EventTarget | null) => void;
}

const ModalOverlay = ({
  target,
  isSubModal,
  children,
  updateTarget,
}: ModalOverlayType) => {
  const { isModalOpen, closeModal } = useModalContext();

  // Reference
  const nodeRef = useRef<HTMLDivElement>(null);

  // Event handlers
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      ref={nodeRef}
      className={clsx(
        modalClasses.overlay,
        'fixed top-0 left-0 w-full overflow-hidden',
        'transition-opacity duration-150 ease-out',
        `${isModalOpen ? 'h-full' : 'h-0'}`,
        `${isModalOpen ? 'animate-in' : 'animate-out'}`,
        `${isModalOpen ? 'visible' : 'invisible'}`,
        `${isSubModal ? 'z-[200]' : 'z-[100]'}`
      )}
      onClick={clickHandler}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
        updateTarget(e.currentTarget)
      }
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
