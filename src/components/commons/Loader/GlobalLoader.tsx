import { useEffect, useState } from 'react';
import styles from './global-loader.module.css';

interface GlobalLoaderType {
  isLoading: boolean;
}

const GlobalLoader = ({ isLoading }: GlobalLoaderType) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | number;
    if (isLoading) {
      setVisible(true);
    } else {
      timeout = setTimeout(() => setVisible(false), 500);
    }
    return () => {
      if (timeout) clearTimeout(timeout as number);
    };
  }, [isLoading]);

  return (
    <div
      className={`${styles['global-loader']} ${isVisible ? styles['is-loading'] : null}`}
    >
      <div className={`${styles['global-loader-fill']}`} />
    </div>
  );
};

export default GlobalLoader;
