import { popAlertClasses } from '../pop-alert-classes';
import clsx from 'clsx';

interface BackDropType {
  isAlertOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PopAlertBackDrop = (props: BackDropType) => {
  const { onClick, isAlertOpen } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(
        popAlertClasses.backdrop,
        'fixed top-0 left-0 z-[110] h-screen w-full transition-opacity duration-150 ease-out',
        'bg-[rgba(0,0,0,0.3)] backdrop-blur-xs',
        isAlertOpen ? 'visible animate-in' : 'invisible animate-out'
      )}
    />
  );
};

export default PopAlertBackDrop;
