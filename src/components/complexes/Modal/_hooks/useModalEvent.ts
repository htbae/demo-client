import useAlert from '@/components/commons/Alert/_hooks/useAlert';
import { modalConfirmContent } from '../modal-constants';
import { useCallback } from 'react';

interface UseCreateModalEventType {
  isConfirmMode: boolean;
  handleClose: () => void;
}

const useModalEvent = (props: UseCreateModalEventType) => {
  const { isConfirmMode, handleClose } = props;
  const { popAlert } = useAlert();

  const closeModal = useCallback(async () => {
    if (isConfirmMode) {
      const confirmed = await popAlert({
        ...modalConfirmContent,
        state: 'info',
        isConfirm: true,
      });
      if (confirmed) {
        handleClose();
      }
    } else {
      handleClose();
    }
  }, [isConfirmMode, popAlert, handleClose]);

  return { closeModal };
};

export default useModalEvent;
