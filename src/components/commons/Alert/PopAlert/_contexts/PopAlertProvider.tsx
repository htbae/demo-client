import { useCallback, useMemo, useState } from 'react';
import { PopAlertParameterType } from '../pop-alert-type';
import PopAlertContext from './pop-alert-context';
import { PopAlert } from '..';

interface PopAlertDataType extends PopAlertParameterType {
  resolve: (value: boolean) => void;
}

interface PopAlertProviderType {
  children: React.ReactNode;
}

const PopAlertProvider = (props: PopAlertProviderType) => {
  const { children } = props;

  const [isAlertOpen, toggleAlertOpen] = useState<boolean>(false);

  const [data, setData] = useState<PopAlertDataType>({
    title: '',
    state: 'info',
    isConfirm: false,
    resolve: () => {},
  });

  const popAlert = useCallback(
    ({ state, message, title, isConfirm }: PopAlertParameterType) => {
      return new Promise<boolean>((resolve) => {
        toggleAlertOpen(true);
        setData({ message, state, title, isConfirm, resolve });
      });
    },
    []
  );

  const confirmHandler = () => {
    toggleAlertOpen(false);
    data.resolve(true);
  };

  const closeHandler = () => {
    toggleAlertOpen(false);
    data.resolve(false);
  };

  const providerValue = useMemo(
    () => ({
      popAlert,
    }),
    [popAlert]
  );

  return (
    <PopAlertContext.Provider value={providerValue}>
      {children}
      <PopAlert
        message={data.message}
        state={data.state}
        title={data.title}
        isConfirm={data.isConfirm}
        handleClose={closeHandler}
        handleConfirm={confirmHandler}
        isOpen={isAlertOpen}
      />
    </PopAlertContext.Provider>
  );
};

export default PopAlertProvider;
