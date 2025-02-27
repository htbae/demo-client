import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertType } from '../alert-type';

const pushAlert = (message: string, type: AlertType) => {
  toast[type](message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Slide,
  });
};

export { pushAlert };
