import React from 'react';
import { PopAlertParameterType } from '../pop-alert-type';

interface PopAlertContextType {
  popAlert: (param: PopAlertParameterType) => Promise<boolean>;
}

const PopAlertContext = React.createContext<PopAlertContextType | undefined>(
  undefined
);

export type { PopAlertContextType };
export default PopAlertContext;
