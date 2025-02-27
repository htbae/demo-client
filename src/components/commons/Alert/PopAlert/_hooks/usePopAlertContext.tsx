import React from 'react';
import PopAlertContext from '../_contexts/pop-alert-context';

export const usePopAlertContext = () => {
  const context = React.useContext(PopAlertContext);

  if (context === undefined) {
    throw new Error('PopAlertContext is required!');
  }

  return context;
};
