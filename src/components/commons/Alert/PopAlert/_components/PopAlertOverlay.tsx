import clsx from 'clsx';
import { popAlertClasses } from '../pop-alert-classes';

const PopAlertOverlay = ({
  isAlertOpen,
  children,
}: {
  isAlertOpen: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        popAlertClasses.overlay,
        'fixed, top-0 left-0 z-[200] w-full overflow-hidden',
        'transition-opacity duration-150 ease-out',
        `${isAlertOpen ? 'h-full' : 'h-0'}`,
        `${isAlertOpen ? 'animate-in' : 'animate-out'}`,
        `${isAlertOpen ? 'visible' : 'invisible'}`
      )}
    >
      {children}
    </div>
  );
};

export default PopAlertOverlay;
