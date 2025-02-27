import { AlertType } from '../alert-type';

interface PopAlertParameterType {
  title: string;
  message?: string;
  state: AlertType;
  isConfirm?: boolean;
}

export type { PopAlertParameterType };
