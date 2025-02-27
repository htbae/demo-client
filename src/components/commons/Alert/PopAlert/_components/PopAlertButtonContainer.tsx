import clsx from 'clsx';
import { popAlertClasses } from '../pop-alert-classes';
import { AlertType } from '../../alert-type';
import PopAlertButton from './PopAlertButton';

interface PopAlertButtonContainerType {
  state: AlertType;
  isConfirmMode?: boolean;
  acceptConfirm: () => void;
  closeAlert: () => void;
}

const PopAlertButtonContainer = (props: PopAlertButtonContainerType) => {
  const { state, isConfirmMode, closeAlert, acceptConfirm } = props;
  return (
    <div className={clsx(popAlertClasses.buttons, 'mt-[16px] mb-[2px]')}>
      {isConfirmMode && (
        <PopAlertButton
          className={popAlertClasses.confirm}
          onClick={acceptConfirm}
          variant={state}
        >
          확인
        </PopAlertButton>
      )}
      <PopAlertButton
        className={popAlertClasses.close}
        onClick={closeAlert}
        hasOutline={isConfirmMode}
        variant={isConfirmMode ? 'default' : state}
      >
        {isConfirmMode ? '취소' : '확인'}
      </PopAlertButton>
    </div>
  );
};

export default PopAlertButtonContainer;
