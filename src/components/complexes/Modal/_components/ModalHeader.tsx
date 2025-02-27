import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeRestore,
} from 'react-icons/vsc';

import { useModalContext } from '../_hooks/useModalContext';
import { modalClasses } from '../modal-classes';
import ModalHeaderButton from './ModalHeaderButton';
import clsx from 'clsx';

interface ModalHeaderType {
  title: string;
}

const ModalHeader = (props: ModalHeaderType) => {
  const { title } = props;

  const {
    isModalFullScreen: isFullScreen,
    toggleFullScreen: setIsFullScreen,
    closeModal: handleClose,
  } = useModalContext();

  // Define zoom icon
  const screenIcon = isFullScreen ? (
    <VscChromeRestore />
  ) : (
    <VscChromeMaximize />
  );

  const resizeHandler = () => setIsFullScreen((prev) => !prev);

  return (
    <>
      <div className={`${modalClasses.nav} absolute right-0 z-[3] p-0`}>
        <ModalHeaderButton onClick={resizeHandler}>
          {screenIcon}
        </ModalHeaderButton>
        <ModalHeaderButton onClick={handleClose}>
          <VscChromeClose />
        </ModalHeaderButton>
      </div>
      <div
        className={clsx(
          `${modalClasses.header}`,
          'flex items-center',
          'h-[54px] w-full px-[30px] py-[15px]',
          'bg-white text-[#07102e]',
          `${isFullScreen ? 'rounded-none' : 'rounded-t-[5px]'}`
        )}
        onDoubleClick={resizeHandler}
      >
        <h2 className='text-2xl font-bold uppercase'>{title}</h2>
      </div>
    </>
  );
};

export default ModalHeader;
