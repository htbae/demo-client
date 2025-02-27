import infoIcon from '@/assets/images/modal_icons/ic-modal-info@3x.png';
import successIcon from '@/assets/images/modal_icons/ic-modal-success@3x.png';
import warningIcon from '@/assets/images/modal_icons/ic-modal-warning@3x.png';

import clsx from 'clsx';
import { AlertType } from '../../alert-type';
import { popAlertClasses } from '../pop-alert-classes';

const getIcon = (state: AlertType) => {
  switch (state) {
    case 'info':
      return infoIcon;
    case 'success':
      return successIcon;
    case 'warning':
    case 'error':
      return warningIcon;
  }
};

const PopAlertIcon = ({ state }: { state: AlertType }) => {
  return (
    <div
      className={clsx(
        popAlertClasses.icons,
        'mt-4 mb-[2.4rem] flex justify-center'
      )}
    >
      <img
        className='h-[80px] w-[80px]'
        src={getIcon(state)}
        alt='alert-icon'
      />
    </div>
  );
};

export default PopAlertIcon;
