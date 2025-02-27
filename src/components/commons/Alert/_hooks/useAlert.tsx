import { usePopAlertContext } from '../PopAlert/_hooks/usePopAlertContext';
import { pushAlert } from '../PushAlert/push-alert-service';

const useAlert = () => {
  const { popAlert } = usePopAlertContext();
  return { popAlert, pushAlert };
};

export default useAlert;
