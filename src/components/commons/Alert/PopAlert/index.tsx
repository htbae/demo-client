import { portalId } from '@/constants/portal-id';
import useOnEscapeClick from '@/hooks/ui/useKeyEvent';
import ReactDOM from 'react-dom';
import { AlertType } from '../alert-type';
import useShowPopAlert from './_hooks/useShowPopAlert';

import PopAlertBackDrop from './_components/PopAlertBackDrop';
import PopAlertOverlay from './_components/PopAlertOverlay';
import PopAlertContainerWrapper from './_components/PopAlertContainerWrapper';
import PopAlertContainer from './_components/PopAlertContainer';
import PopAlertIcon from './_components/PopAlertIcon';
import PopAlertTextContainer from './_components/PopAlertTextContainer';
import PopAlertButtonContainer from './_components/PopAlertButtonContainer';

interface PopAlertType {
  title: string;
  message?: string;
  state: AlertType;
  isConfirm?: boolean;
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const PopAlert = (props: PopAlertType) => {
  // Extract props
  const {
    isOpen,
    message,
    state,
    title,
    isConfirm,
    handleClose,
    handleConfirm,
  } = props;

  const { visible } = useShowPopAlert({ isAlertOpen: isOpen });

  // Initialize escape event
  useOnEscapeClick(handleClose, 'html');

  return (
    <>
      {visible && (
        <>
          {ReactDOM.createPortal(
            <PopAlertBackDrop isAlertOpen={isOpen} onClick={handleClose} />,
            document.getElementById(portalId.alertBackdrop)!
          )}
          {ReactDOM.createPortal(
            <PopAlertOverlay isAlertOpen={isOpen}>
              <PopAlertContainerWrapper>
                <PopAlertContainer>
                  <PopAlertIcon state={state} />
                  <PopAlertTextContainer title={title} message={message} />
                  <PopAlertButtonContainer
                    acceptConfirm={handleConfirm}
                    closeAlert={handleClose}
                    isConfirmMode={isConfirm}
                    state={state}
                  />
                </PopAlertContainer>
              </PopAlertContainerWrapper>
            </PopAlertOverlay>,
            document.getElementById(portalId.alert)!
          )}
        </>
      )}
    </>
  );
};

export type { PopAlertType };
export { PopAlert };
