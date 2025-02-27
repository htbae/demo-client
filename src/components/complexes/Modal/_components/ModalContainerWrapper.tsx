import clsx from 'clsx';
import { modalClasses } from '../modal-classes';

const ModalContainerWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        modalClasses.root,
        'relative z-[2] h-full w-full overflow-x-hidden overflow-y-scroll bg-transparent'
      )}
    >
      {children}
    </div>
  );
};

export default ModalContainerWrapper;
