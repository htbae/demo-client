import { useEffect, useState } from 'react';

type BreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always';

export const BreakPoints: Record<BreakPointType, string> = {
  xs: '500px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  always: 'always',
};

export const useMediaQuery = (breakpoint?: string): boolean => {
  const [matches, setMatches] = useState(breakpoint === 'always');

  useEffect(() => {
    if (breakpoint && breakpoint !== 'always') {
      const media = window.matchMedia(`(max-width: ${breakpoint})`);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }
  }, [matches, breakpoint]);

  return matches;
};
