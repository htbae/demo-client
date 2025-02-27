import React from 'react';
import PushAlertContainer from './PushAlert/PushAlertContainer';
import PopAlertProvider from './PopAlert/_contexts/PopAlertProvider';

interface AlertInitializerType {
  children: React.ReactNode;
}

const AlertInitializer = ({ children }: AlertInitializerType) => {
  return (
    <>
      <PushAlertContainer />
      <PopAlertProvider>{children}</PopAlertProvider>
    </>
  );
};

export default AlertInitializer;
