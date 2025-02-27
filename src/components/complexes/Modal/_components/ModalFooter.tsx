import { ReactNode } from 'react';
import { modalClasses } from '../modal-classes';

interface ModalFooterType {
  children?: ReactNode;
}

const ModalFooter = (props: ModalFooterType) => {
  const { children } = props;

  return (
    <div
      className={`${modalClasses.footer} flex w-full justify-end space-x-2 border-t border-t-[#dee2e6] px-9 py-6`}
    >
      {children}
    </div>
  );
};

export default ModalFooter;
