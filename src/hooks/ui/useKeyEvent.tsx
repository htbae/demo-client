import { useEffect } from 'react';

const useOnEscapeClick = (
  callback: () => void,
  target: 'body' | 'html' = 'body'
) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? callback() : null;

    if (target === 'body') {
      document.body.addEventListener('keydown', closeOnEscapeKey);
      return () => {
        document.body.removeEventListener('keydown', closeOnEscapeKey);
      };
    } else {
      document.addEventListener('keydown', closeOnEscapeKey);
      return () => {
        document.removeEventListener('keydown', closeOnEscapeKey);
      };
    }
  }, [callback, target]);
};

export default useOnEscapeClick;
