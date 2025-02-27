import useBodyScrollLock from '@/hooks/ui/useBodyScollLock';
import { useEffect } from 'react';
import { ModalType } from '../modal-type';

const useLockModal = ({
  isModalOpen,
  isSubModal,
}: Pick<ModalType, 'isModalOpen' | 'isSubModal'>) => {
  // Define scroll handlers
  const { lockScroll, openScroll } = useBodyScrollLock();

  // Effects
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isModalOpen) {
      lockScroll();
    } else {
      if (!isSubModal) {
        timeoutId = setTimeout(() => openScroll(), 100);
      }
    }
    return () => {
      if (!timeoutId) clearTimeout(timeoutId);
    };
  }, [isModalOpen, isSubModal, lockScroll, openScroll]);
};

export default useLockModal;
