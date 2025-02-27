import clsx from 'clsx';
import { popAlertClasses } from '../pop-alert-classes';

const PopAlertContainerWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        popAlertClasses.root,
        'relative z-[120] flex h-screen w-full items-center justify-center bg-transparent'
      )}
    >
      {children}
    </div>
  );
};

export default PopAlertContainerWrapper;
