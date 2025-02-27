import { useCallback } from 'react';

const useBodyScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '10px';
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0px';
  }, []);

  return { lockScroll, openScroll };
};

export default useBodyScrollLock;
