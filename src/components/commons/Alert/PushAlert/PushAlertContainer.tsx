import { ToastContainer } from 'react-toastify';

const PushAlertContainer = () => (
  <ToastContainer
    toastClassName={(context) => {
      const baseClass = 'font-serif text-lg';
      let colorClass = '';

      if (context?.type === 'info') {
        colorClass = 'bg-info-500';
      } else if (context?.type === 'success') {
        colorClass = 'bg-success-500';
      } else if (context?.type === 'warning') {
        colorClass = 'bg-warning-500';
      } else if (context?.type === 'error') {
        colorClass = 'bg-error-500';
      }
      return `${baseClass} ${colorClass} text-white py-2 px-4 rounded-lg`;
    }}
  />
);

export default PushAlertContainer;
