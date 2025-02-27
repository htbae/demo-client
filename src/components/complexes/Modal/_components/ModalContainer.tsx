import clsx from 'clsx';
import { modalClasses } from '../modal-classes';
import { ModalSizeType } from '../modal-type';
import { useModalContext } from '../_hooks/useModalContext';

interface ModalContainerType {
  size: ModalSizeType;
  children: React.ReactNode;
  updateTarget: (target: EventTarget | null) => void;
}

const sizeClasses: Record<ModalSizeType, string> = {
  sm: 'max-w-[480px]',
  md: 'max-w-[576px]',
  lg: 'max-w-[768px]',
  xs: 'max-w-[992px]',
  xl: 'max-w-[1200px]',
  xxl: 'max-w-[1400px]',
  xxxl: 'max-w-[1800px]',
};

const ModalContainer = ({
  size,
  children,
  updateTarget,
}: ModalContainerType) => {
  // Define modal size

  const { isModalFullScreen } = useModalContext();

  const saveContentHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    updateTarget(e.currentTarget);
    e.stopPropagation();
  };

  return (
    <section
      className={clsx(
        modalClasses.container,
        'relative mx-auto flex flex-col p-0',
        'bg-white transition-all duration-200 ease-out',
        isModalFullScreen
          ? 'rounded-0 my-0 min-h-full max-w-full'
          : `${sizeClasses[size]} my-4 min-h-[120px] rounded-[5px]`
      )}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={saveContentHandler}
    >
      {children}
    </section>
  );
};

export default ModalContainer;
