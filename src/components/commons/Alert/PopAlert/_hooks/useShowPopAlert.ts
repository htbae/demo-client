import { useEffect, useState } from 'react';

const useShowPopAlert = ({ isAlertOpen }: { isAlertOpen: boolean }) => {
  // States
  const [visible, setVisible] = useState(false);

  // Effects
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isAlertOpen) {
      setVisible(true);
    } else {
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 100);
    }
    return () => {
      if (!timeoutId) clearTimeout(timeoutId);
    };
  }, [isAlertOpen]);

  return { visible };
};

export default useShowPopAlert;
