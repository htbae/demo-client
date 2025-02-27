import clsx from 'clsx';
import { popAlertClasses } from '../pop-alert-classes';
import { PopAlertType } from '..';

const PopAlertTextContainer = ({
  title,
  message,
}: Pick<PopAlertType, 'title' | 'message'>) => {
  return (
    <>
      <h3
        className={clsx(
          popAlertClasses.title,
          'mb-[2.4rem] text-[2.4rem] font-semibold text-[#2f3e4e]'
        )}
      >
        {title}
      </h3>
      <p className={clsx(popAlertClasses.message, 'mb-[1.6rem] text-[1.6rem]')}>
        {message}
      </p>
    </>
  );
};

export default PopAlertTextContainer;
