type ModalSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

interface ModalType {
  size?: ModalSizeType;
  isModalOpen: boolean;
  isConfirmMode?: boolean;
  isSubModal?: boolean;
  children?: React.ReactNode;
  closeModal: () => void;
}

export type { ModalSizeType, ModalType };
