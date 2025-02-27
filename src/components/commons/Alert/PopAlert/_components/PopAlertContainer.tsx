import clsx from 'clsx';
import { popAlertClasses } from '../pop-alert-classes';

const PopAlertContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={clsx(
        popAlertClasses.container,
        'relative flex flex-col p-[3rem]',
        'min-h-[360px] w-[427px] items-center bg-white',
        'transition-all duration-200 ease-out',
        'pointer-events-auto text-center text-[#313435]',

        'border-[rgba(0, 0, 0, 0.2)] rounded-[0.3rem] break-all outline-0'
      )}
    >
      {children}
    </section>
  );
};

export default PopAlertContainer;
