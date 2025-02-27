import { ReactNode } from 'react';
import { modalClasses } from '../modal-classes';
import { useModalContext } from '../_hooks/useModalContext';

interface ModalBodyType {
  children: ReactNode;
}

const ModalBody = (props: ModalBodyType) => {
  const { children } = props;

  const { isModalOpen: isOpen } = useModalContext();

  return (
    <div
      className={`${modalClasses.body} block w-full flex-auto px-[3rem] py-[3rem]`}
    >
      {isOpen && children}
    </div>
  );
};

export default ModalBody;
