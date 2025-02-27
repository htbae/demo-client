import clsx from 'clsx';
import { modalClasses } from '../modal-classes';

interface BackDropType {
  isOpen: boolean;
  isSubModal: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/* backdrop */
const BackDrop = (props: BackDropType) => {
  const { onClick, isOpen, isSubModal } = props;

  const classnames = clsx(
    isSubModal ? 'z-[110]' : 'z-[10]',
    isOpen ? 'visible animate-in' : 'invisible animate-out',
    'fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.3)] backdrop-blur-xs transition-all duration-150 ease-out'
  );

  return (
    <div
      className={`${modalClasses.backdrop} ${classnames}`}
      onClick={onClick}
    />
  );
};

export default BackDrop;
